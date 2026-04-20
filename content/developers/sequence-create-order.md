# Sequence: Создание заказа

![Sequence: Create Order](../diagrams-rendered/sequence-create-order.svg)

## Поток

1. Клиент отправляет `POST /store/order`.
2. API передает запрос в сервис заказов.
3. Сервис сохраняет заказ в БД.
4. Клиент получает `201 Created`.
