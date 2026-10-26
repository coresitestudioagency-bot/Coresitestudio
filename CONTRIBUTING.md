# Contributing to Core Site Studio

Thanks for taking the time to contribute. This repo is a static studio site
plus a template vault. Small, focused changes are easiest to review.

## Ground rules

- Be respectful. Follow `CODE_OF_CONDUCT.md`.
- Open an issue before large redesigns.
- Keep the sketch / cream / yellow visual language unless the issue asks otherwise.
- Do not commit secrets, API keys, or private client files.

## Local setup

```bash
git clone https://github.com/coresitestudioagency-bot/Coresitestudio.git
cd Coresitestudio
python3 -m http.server 8000
```

Open http://localhost:8000 for the home page and http://localhost:8000/explore.html
for the template vault.

## What to change where

| Goal | File |
| ---- | ---- |
| Home page, journal, nav, modals | `index.html` |
| Template vault / prompts | `explore.html` |
| Add a website template | `explore.html` (`WEB_TEMPLATES`) plus the template files |
| Add a video prompt | `explore.html` (`VIDEO_TEMPLATES`) |
| Bloom & Petal source | `Bloom&Petal/` |
| Bloom & Petal built preview | `bloom-petal/` |

## Pull requests

1. Fork the repo (or branch from `main`).
2. Make the smallest change that solves the issue.
3. Check desktop and mobile (home cards should stay 2-up on small screens).
4. Open a pull request with:
   - What changed
   - Why
   - Screenshots if the UI moved

## Commit style

Use short, present-tense messages:

```text
feat: add Prompt nav link
fix: shrink explore cards on mobile
docs: explain how to add a template
```

## Questions

Email coresitestudio.agency@gmail.com or open a GitHub issue.
