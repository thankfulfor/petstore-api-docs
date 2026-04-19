# Petstore API Docs Portal (Portfolio)

Портфолио-проект технического писателя с инженерным бэкграундом: документационный портал на базе Swagger Petstore API.

## Что смотреть за 3 минуты

1. **Quick Start**: https://thankfulfor.github.io/petstore-api-docs/latest/getting-started/
2. **Interactive API**: https://thankfulfor.github.io/petstore-api-docs/latest/interactive-api/
3. **Architecture (C4/UML)**: https://thankfulfor.github.io/petstore-api-docs/latest/developers/architecture-c4/
4. **Docs as Code**: https://thankfulfor.github.io/petstore-api-docs/latest/about/docs-as-code/

## Инженерная ценность

- Docs-as-code: Markdown + OpenAPI + PlantUML в Git.
- Автосборка и автодеплой через GitHub Actions.
- Валидация OpenAPI в CI перед публикацией.
- Версионирование документации через `mike`.

## Локальный запуск

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Откройте `http://127.0.0.1:8000`.

## Сборка и проверка

```bash
bash scripts/render-diagrams.sh
python -m openapi_spec_validator docs/openapi/openapi.yaml
mkdocs build
```

## CI/CD

- Workflow: `.github/workflows/ci.yml`
- Деплой: GitHub Pages (`gh-pages`) с versioning через `mike`.
