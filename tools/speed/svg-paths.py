"""
Shorter path data for the SVG icons written into the pages (Funfacts, the
homepage icons, the lotus ...). Their paths came from Figma with 4 decimals
on 25 to 69 unit grids; 2 decimals is a hundredth of a CSS pixel there, and a
command written relative to the last point is often shorter. Elements,
attributes and colours stay as they are: only the d strings change.

Why (audit 26 Nov): the path data was 30 to 40% of a page's compressed HTML
(13.5 KB of 44 KB on /seminyak/balinese-massage/), and React's data for the
page carries it a second time.

    python tools/speed/svg-paths.py           rewrite the files in src/
    python tools/speed/svg-paths.py --check   list what would change (exit 1 if anything)

Every rewritten path is checked first: absolute end points are rounded, never
the relative steps, so the error does not add up along a path (at most 0.005
units per point). A path with an arc, or anything it cannot read, stays as it
is. tools/speed/README.md has the rendering comparison.
"""
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
SCALE = 100  # 2 decimals
ARGS = {"M": 2, "L": 2, "H": 1, "V": 1, "C": 6, "S": 4, "Q": 4, "T": 2, "Z": 0}
NUMBER = re.compile(r"[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?")
TOKEN = re.compile(r"[MLHVCSQTAZmlhvcsqtaz]|[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?|[\s,]+")


def parse(d):
    """[(COMMAND, [absolute numbers])], or None if the path has anything else."""
    tokens = [t for t in TOKEN.findall(d) if not t.isspace() and t != "," and t.strip(", \t\r\n")]
    if "".join(TOKEN.findall(d)) != d:
        return None
    out, i, cmd = [], 0, None
    x = y = sx = sy = 0.0
    while i < len(tokens):
        t = tokens[i]
        if t.isalpha():
            cmd = t
            i += 1
            if cmd in "Zz":
                out.append(("Z", []))
                x, y = sx, sy
                continue
        elif cmd is None or cmd in "Zz":
            return None
        up = cmd.upper()
        if up not in ARGS:
            return None  # arcs and anything unknown: left as they are
        n = ARGS[up]
        nums = tokens[i:i + n]
        if len(nums) < n or not all(NUMBER.fullmatch(v) for v in nums):
            return None
        v = [float(a) for a in nums]
        i += n
        rel = cmd.islower()
        if up == "H":
            v = [v[0] + (x if rel else 0)]
            x = v[0]
        elif up == "V":
            v = [v[0] + (y if rel else 0)]
            y = v[0]
        else:
            if rel:
                v = [a + (x if k % 2 == 0 else y) for k, a in enumerate(v)]
            x, y = v[-2], v[-1]
        if up == "M":
            sx, sy = x, y
            cmd = "l" if rel else "L"  # more pairs after a moveto are linetos
        out.append((up, v))
    return out


def fmt(n):
    """A number in hundredths, as short as it can be written."""
    s = f"{abs(n) / SCALE:.2f}".rstrip("0").rstrip(".")
    if s.startswith("0."):
        s = s[1:]
    if s == "":
        s = "0"
    return ("-" + s) if n < 0 and s != "0" else s


def join(nums):
    """Numbers without the separators they do not need."""
    out = ""
    for s in nums:
        if out and not (s.startswith("-") or (s.startswith(".") and "." in re.split(r"[^0-9.]", out)[-1])):
            out += " "
        out += s
    return out


def write(segments):
    out = []
    last = None
    x = y = sx = sy = 0  # in hundredths, rounded: the steps are exact
    for up, v in segments:
        if up == "Z":
            out.append("z")
            x, y = sx, sy
            last = "z"
            continue
        r = [round(a * SCALE) for a in v]
        if up == "H":
            ab, re_ = [r[0]], [r[0] - x]
            nx, ny = r[0], y
        elif up == "V":
            ab, re_ = [r[0]], [r[0] - y]
            nx, ny = x, r[0]
        else:
            ab = r
            re_ = [a - (x if k % 2 == 0 else y) for k, a in enumerate(r)]
            nx, ny = r[-2], r[-1]
        a_txt, r_txt = join([fmt(n) for n in ab]), join([fmt(n) for n in re_])
        # A repeated command needs no letter (after a moveto, repeated pairs are linetos).
        def cost(letter, txt):
            implicit = last == letter or (last in ("M", "m") and letter == ("L" if last == "M" else "l"))
            if implicit and up != "M":
                sep = "" if txt.startswith("-") or (txt.startswith(".") and "." in re.split(r"[^0-9.]", out[-1])[-1]) else " "
                return sep + txt
            return letter + txt
        a_out, r_out = cost(up, a_txt), cost(up.lower(), r_txt)
        if len(r_out) < len(a_out) and out:
            out.append(r_out)
            last = up.lower()
        else:
            out.append(a_out)
            last = up
        x, y = nx, ny
        if up == "M":
            sx, sy = x, y
    return "".join(out)


def same(a, b):
    """The rewritten path is the old one with its points rounded."""
    pa, pb = parse(a), parse(b)
    if pa is None or pb is None or len(pa) != len(pb):
        return False
    for (ca, va), (cb, vb) in zip(pa, pb):
        if ca != cb or len(va) != len(vb):
            return False
        if any(abs(p - q) > 0.5 / SCALE + 1e-9 for p, q in zip(va, vb)):
            return False
    return True


def shorter(d):
    segments = parse(d)
    if not segments:
        return d
    new = write(segments)
    return new if len(new) < len(d) and same(d, new) else d


# A path in the code: d="M…" in JSX, or a string literal of path data (the lotus).
PATH = re.compile(r'(?<=")([Mm][0-9MLHVCSQTZmlhvcsqtz .,\-eE]{40,})(?=")')


def main():
    check = "--check" in sys.argv
    changed = before_total = after_total = 0
    for d, _, files in os.walk(os.path.join(ROOT, "src")):
        for f in files:
            if not f.endswith((".tsx", ".ts")):
                continue
            p = os.path.join(d, f)
            s = open(p, encoding="utf8", newline="").read()
            new = PATH.sub(lambda m: shorter(m.group(1)), s)
            if new == s:
                continue
            a = sum(len(m) for m in PATH.findall(s))
            b = sum(len(m) for m in PATH.findall(new))
            before_total += a
            after_total += b
            changed += 1
            print(f"{os.path.relpath(p, ROOT)}: path data {a} -> {b} characters")
            if not check:
                open(p, "w", encoding="utf8", newline="").write(new)
    print(f"{changed} files, {before_total} -> {after_total} characters of path data")
    if check and changed:
        sys.exit(1)


if __name__ == "__main__":
    main()
