# Онбординг

## Первый успешный запрос

```bash
curl -X GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
```

=== "Успех (200)"

    ```json
    [
      {"id": 1, "name": "doggie", "status": "available"}
    ]
    ```

=== "Ошибка (400)"

    ```json
    {
      "code": 400,
      "type": "unknown",
      "message": "bad input"
    }
    ```

!!! warning "Частая ошибка"
    Неверное значение `status` в query-параметре.
