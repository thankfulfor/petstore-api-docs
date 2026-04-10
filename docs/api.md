# API Reference

## Overview

Текущая версия API в этом кейсе: `v2`.

### Endpoints

- `GET /pet/findByStatus` - получить питомцев по статусу;
- `GET /pet/{petId}` - получить питомца по ID;
- `GET /store/inventory` - получить статистику инвентаря.

## GET /pet/findByStatus

Возвращает массив питомцев по статусу.

### Пример запроса

```bash
curl -X GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
```

### Пример ответа (`200 OK`)

```json
[
  {
    "id": 1,
    "name": "doggie",
    "status": "available"
  }
]
```

## GET /pet/{petId}

Возвращает одного питомца по идентификатору.

### Пример запроса

```bash
curl -X GET "https://petstore.swagger.io/v2/pet/1"
```

### Ответы

- `200` - питомец найден;
- `404` - питомец не найден.

## GET /store/inventory

Возвращает количество питомцев по статусам.

### Пример запроса

```bash
curl -X GET "https://petstore.swagger.io/v2/store/inventory"
```

## OpenAPI Spec (ReDoc)

Ниже встроена спецификация OpenAPI для полного контрактного референса.

{% redoc %}
spec-url: ../openapi/openapi.yaml
{% endredoc %}
