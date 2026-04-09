# Getting Started

## Base URL

Все примеры в документации используют:

`https://api.taskflow.example/v1`

## Формат данных

- Контент-тип запросов: `application/json`
- Контент-тип ответов: `application/json`
- Кодировка: `UTF-8`

## Быстрый старт за 3 шага

### 1. Проверить доступность API

```bash
curl -X GET "https://api.taskflow.example/v1/tasks"
```

Ожидаемый ответ `200 OK`:

```json
[
  {
    "id": 1,
    "title": "Prepare release notes"
  }
]
```

### 2. Создать задачу

```bash
curl -X POST "https://api.taskflow.example/v1/tasks" \
  -H "Content-Type: application/json" \
  -d '{"title":"Write API documentation"}'
```

Ожидаемый ответ `201 Created`.

### 3. Повторно запросить список задач

Убедитесь, что созданная задача появилась в `GET /tasks`.

## Аутентификация

В текущем демо-контракте аутентификация не требуется.  
В production-версии обычно добавляется `Bearer` токен в заголовок `Authorization`.

## Ошибки и диагностика

Типичные HTTP-коды:
- `200`: успешный запрос;
- `201`: ресурс создан;
- `400`: ошибка валидации входных данных;
- `401`: отсутствует или невалидный токен;
- `500`: внутренняя ошибка сервера.

Рекомендация для клиентов: логировать `status code`, `request id` (если есть) и тело ошибки.
