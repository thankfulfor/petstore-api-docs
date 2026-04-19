# Технический писатель, экс-разработчик

Пишу сложные вещи понятным языком: API Reference, архитектурные документы, пошаговые руководства.

<div class="hero-actions" markdown>
[Связаться](about/resume.md){ .md-button .md-button--primary }
[Смотреть API кейс](cases/api-payment-case.md){ .md-button }
</div>

## Ключевой стек

- API Reference: OpenAPI, Swagger UI
- Архитектурные документы: C4, UML, BPMN
- Руководства: onboarding, troubleshooting, how-to
- Инструменты: MkDocs Material, GitHub Actions, GitHub Pages, Git

## Кейсы (фильтр)

<div data-case-filter-root>
  <div class="case-filter-controls">
    <input type="search" placeholder="Поиск по названию и описанию..." data-case-search>
    <div class="case-tags">
      <button class="is-active" data-case-tag="all" type="button">Все</button>
      <button data-case-tag="api" type="button">API Reference</button>
      <button data-case-tag="архитектура" type="button">Архитектурные документы</button>
      <button data-case-tag="инструкции" type="button">Пошаговые руководства</button>
    </div>
  </div>

  <div class="grid cards case-grid" markdown>

- :material-api: **API Reference: Payment Gateway v2**

  ---

  Интерактивный контракт, примеры запросов и обработка ошибок.

  <div data-case-card data-case-tags="api платежи" data-case-text="API Reference Payment Gateway v2 OpenAPI Swagger ошибки интеграции"></div>

  [Смотреть пример](cases/api-payment-case.md)

- :material-sitemap: **C4 + UML: Документация архитектуры**

  ---

  Контекст системы, взаимодействие с внешними сервисами, sequence потоки.

  <div data-case-card data-case-tags="архитектура" data-case-text="C4 UML архитектура sequence внешние системы"></div>

  [Открыть раздел](developers/architecture-c4.md)

- :material-book-open-page-variant: **Онбординг оператора зоомагазина**

  ---

  Регистрация, добавление питомца, оформление заказа и FAQ.

  <div data-case-card data-case-tags="инструкции" data-case-text="онбординг оператор user guide FAQ оформление заказа"></div>

  [Открыть раздел](users/onboarding.md)

- :material-timeline-check: **Сквозной сценарий: Инцидент оплаты**

  ---

  BPMN + API + Dev tasks + User guide + KPI в одном документе.

  <div data-case-card data-case-tags="api архитектура инструкции" data-case-text="инцидент сбой оплаты BPMN API Dev User KPI"></div>

  [Открыть сценарий](scenario-payment-incident.md)

  </div>
</div>

## Business Impact (демо-метрики)

| Метрика | До | После | Эффект |
|---|---:|---:|---:|
| Time-to-first-call | 20 мин | 5 мин | -75% |
| Доля ошибок в первом запросе | 42% | 18% | -24 п.п. |
| Время поиска нужного endpoint | 4.5 мин | 1.5 мин | -67% |

!!! note "Важно"
    Метрики демонстрационные и используются как формат оценки качества документации в портфолио-кейсе.

## Дополнительно

- [Обо мне / резюме и контакты](about/resume.md)
- [Игра: Найди ошибку в документации](game/find-doc-bug.md)
- [QA Checklist](qa-checklist.md)
