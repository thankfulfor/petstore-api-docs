# Кейс: API Reference для платежного сервиса

## Контекст

Нужно было повысить качество API-документации платежного сервиса: сократить время первого успешного запроса и снизить количество ошибок интеграции.

## Что сделано

- введен сценарный Quick Start;
- добавлен интерактивный Swagger UI;
- унифицирована структура ошибок и примеров;
- добавлен changelog и версия документации.

## Интерактивное превью API

- [Открыть Interactive API](../interactive-api.md)

## До / После

<div class="before-after" id="beforeAfterCase1">
  <img src="https://dummyimage.com/1200x600/efefef/333&text=Before:+flat+structure,+no+examples" alt="Before" class="before-img">
  <img src="https://dummyimage.com/1200x600/daf2ff/003355&text=After:+scenario+quick+start+and+interactive+api" alt="After" class="after-img">
  <input type="range" min="0" max="100" value="50" class="ba-slider" aria-label="Сравнение до и после">
</div>

## Результат

- Time-to-first-call: 20 -> 5 минут.
- Доля ошибок первого запроса: 42% -> 18%.

## Связанные материалы

- [Справочник API](../api.md)
- [Сценарий: Инцидент — сбой оплаты](../scenario-payment-incident.md)
