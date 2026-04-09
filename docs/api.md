# API Reference

## Overview

Текущая версия API: `v1`.

### Endpoints

- `GET /tasks` - получить список задач;
- `POST /tasks` - создать новую задачу.

## GET /tasks

Возвращает массив задач.

### Пример запроса

```bash
curl -X GET "https://api.taskflow.example/v1/tasks"
```

### Пример ответа (`200 OK`)

```json
[
  {
    "id": 1,
    "title": "Write docs"
  }
]
```

## POST /tasks

Создает задачу по переданному `title`.

### Пример запроса

```bash
curl -X POST "https://api.taskflow.example/v1/tasks" \
  -H "Content-Type: application/json" \
  -d '{"title":"Update API examples"}'
```

### Тело запроса

```json
{
  "title": "string"
}
```

### Пример ответа (`201 Created`)

Пустое тело ответа или объект задачи (в зависимости от реализации сервера).

## OpenAPI Spec (ReDoc)

Ниже встроена спецификация OpenAPI для полного контрактного референса.

{% redoc %}
spec-url: ../openapi/openapi.yaml
{% endredoc %}
