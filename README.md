# Petstore API Docs (Hugo + PaperMod)

Портфолио технического писателя на Hugo с темой PaperMod.

## Stack

- Hugo
- Theme: PaperMod
- Mermaid / Swagger UI / Chart.js
- GitHub Actions + GitHub Pages

## Local run

```bash
git submodule update --init --recursive
hugo server
```

## Build

```bash
hugo --minify
```

## Deploy

Деплой настроен в `.github/workflows/ci.yml`.
При пуше в `main` сайт собирается и публикуется в `gh-pages`.

## Key content

- `/interactive-api/`
- `/scenario-order/`
- `/about/resume/`
- `/game/find-doc-bug/`
