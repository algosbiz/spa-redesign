"""
Lighter copies of the decorative pictures every page loads as it opens
(src/styles/light-images.css uses them):

  - the torn paper edges (section-shape-top/bottom.png, 54 KB): lossless WebP,
    the same pixels, and for phones the middle 768 of their 1920 pixels, which
    is all a screen up to 768 px wide shows of a centred picture;
  - the lotus behind the small icons (logo/sbm.webp, 20 KB, drawn 28 px wide):
    84 px wide, in one colour with its shape (gold.css repaints it from its
    shape alone).

    python tools/speed/light-images.py        (needs: pip install pillow)
"""
from pathlib import Path

from PIL import Image

IMAGES = Path(__file__).resolve().parents[2] / "public/images"


def save(image, path, **how):
    image.save(path, format="WEBP", method=6, **how)
    print(f"{path.relative_to(IMAGES)}  {image.size[0]}x{image.size[1]}  {path.stat().st_size / 1024:.1f} KB")


for side in ("top", "bottom"):
    source = Image.open(IMAGES / f"shape/section-shape-{side}.png").convert("RGBA")
    width, height = source.size
    save(source, IMAGES / f"shape/section-shape-{side}-1920.webp", lossless=True, quality=100)
    left = (width - 768) // 2
    save(source.crop((left, 0, left + 768, height)), IMAGES / f"shape/section-shape-{side}-768.webp", lossless=True, quality=100)

lotus = Image.open(IMAGES / "logo/sbm.webp").convert("RGBA")
small = lotus.resize((84, round(lotus.height * 84 / lotus.width)), Image.LANCZOS)
flat = Image.new("RGBA", small.size, (0xA7, 0x86, 0x27, 0))
flat.putalpha(small.getchannel("A"))
save(flat, IMAGES / "logo/sbm-84.webp", lossless=True, quality=100)
