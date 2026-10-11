# sāda.com redirect Worker

`sāda.com` (punycode `xn--sda-1oa.com`) is retired. This Cloudflare Worker
301-redirects every request to the same path on `https://sada.com.om`,
preserving the query string.

Deployed by the CTO window on 1 Oct 2026 as Worker `sada-com-redirect`,
on routes `xn--sda-1oa.com/*` and `www.xn--sda-1oa.com/*`.

Source kept here so the whole site is committed in one place.
**Do not redeploy from this copy** without checking with the CTO window first.
