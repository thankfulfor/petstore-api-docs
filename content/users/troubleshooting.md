# Устранение неполадок

## `400 Bad Request`

Причина: невалидные параметры запроса.

Проверка:

```bash
curl -i "https://petstore.swagger.io/v2/pet/findByStatus?status=wrong"
```

## `404 Not Found`

Причина: ресурс с таким идентификатором не существует.

Проверка:

```bash
curl -i "https://petstore.swagger.io/v2/pet/999999999"
```
