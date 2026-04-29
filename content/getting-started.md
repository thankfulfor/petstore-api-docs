# Getting Started

## Base URL

Все примеры в документации используют:

`https://petstore.swagger.io/v2`

## Формат данных

- Контент-тип запросов: `application/json`
- Контент-тип ответов: `application/json`
- Кодировка: `UTF-8`

## Быстрый старт за 3 шага

### 1. Проверить доступность API

```bash
curl -X GET "https://petstore.swagger.io/v2/store/inventory"
```

Ожидаемый ответ `200 OK`:

```json
{
  "available": 123,
  "pending": 42,
  "sold": 87
}
```

### 2. Получить питомцев в статусе `available`

```bash
curl -X GET "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
```

Ожидаемый ответ `200 OK` с массивом объектов `Pet`.

### Пример на JavaScript (fetch)

```javascript
const response = await fetch(
  "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}

const pets = await response.json();
console.log(pets.slice(0, 3));
```

### 3. Получить питомца по ID

```bash
curl -X GET "https://petstore.swagger.io/v2/pet/1"
```

Ожидаемый ответ:

- `200`, если питомец найден;
- `404`, если питомец не найден.

## Аутентификация

Для методов только чтения из этого мини-кейса аутентификация не требуется.
В полном API есть защищенные методы (добавление/изменение/удаление), где используются API key/OAuth.

## Ошибки и диагностика

Типичные HTTP-коды:

- `200`: успешный запрос;
- `400`: некорректный параметр запроса;
- `404`: сущность не найдена;
- `405`: невалидный ввод;
- `500`: внутренняя ошибка сервера.

Рекомендация для клиентов: логировать `status code`, `request id` (если есть) и тело ошибки.

## Типовые ошибки и как проверить

### `400 Bad Request` (некорректный параметр)

Проверка:

```bash
curl -i "https://petstore.swagger.io/v2/pet/findByStatus?status=wrong_status"
```

Что проверить:

- допустимые значения параметра `status` (`available`, `pending`, `sold`);
- URL и query-параметры без опечаток.

### `404 Not Found` (ресурс не найден)

Проверка:

```bash
curl -i "https://petstore.swagger.io/v2/pet/999999999"
```

Что проверить:

- корректность `petId`;
- существует ли сущность в системе.

## Обратная связь

Если пример не работает или требует уточнений:  
[Сообщить об ошибке в документации](https://github.com/thankfulfor/portfolio/issues/new?template=blank_issues)
