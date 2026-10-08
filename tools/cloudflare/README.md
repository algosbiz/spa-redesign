# Cloudflare Bulk Redirects

`bulk-redirects.csv` is a copy of the website's redirect map (`liveRedirects` in
`src/data/redirects.ts`) for Cloudflare, plus one line sending any other
`www.spabalimoon.com` URL to the same path on `spabalimoon.com`. Cloudflare
answers before Vercel's http → https redirect, so an old URL reaches its final
address in one hop for `http://` and `https://`, with or without `www`.

## Regenerate

```bash
npm run cloudflare:redirects
```

Run it whenever `liveRedirects` changes, then replace the list's entries in
Cloudflare with the new CSV (delete all, upload the file).

## Cloudflare setup (2026-10-08)

- Bulk Redirect List `spabalimoon_redirects`, imported from the CSV.
- Bulk Redirect Rule using that list, default expression
  (`http.request.full_uri in $spabalimoon_redirects`).
- DNS: `www` must be **Proxied** (orange cloud); with "DNS only" Cloudflare
  never sees www requests.
- Must stay as they are: SSL/TLS mode Full or Full (strict), and "Always Use
  HTTPS" off (it would answer http first and add a hop).

## Check

```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" http://www.spabalimoon.com/spa-treatments/
```

should print `301 https://spabalimoon.com/seminyak/`.
