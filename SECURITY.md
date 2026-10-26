# Security Policy

## Supported Versions

This repository is a static website. Security updates are applied to the
latest `main` branch only.

| Branch | Supported |
| ------ | --------- |
| main   | Yes       |
| other  | No        |

## Reporting a Vulnerability

If you discover a security issue, please **do not** open a public GitHub issue.

Email the studio at **coresitestudio.agency@gmail.com** with:

- A short description of the issue
- Steps to reproduce, if possible
- Impact (what an attacker could do)
- Any suggested fix

We aim to acknowledge reports within 72 hours and follow up with a fix or
status update as soon as we can.

## Scope

In scope:

- Cross-site scripting in `index.html` or `explore.html`
- Open redirects or unsafe iframe preview URLs
- Secrets accidentally committed to the repository
- Dependency issues in `Bloom&Petal/`

Out of scope:

- Denial of service against third-party CDNs (Tailwind CDN, fonts, video hosts)
- Issues in third-party services (Payhip, Instagram, WhatsApp)

## Public Disclosures

Please give us a reasonable window to patch before publishing details.
Thank you for helping keep Core Site Studio and its visitors safe.
