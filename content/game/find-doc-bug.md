# Игра: Найди ошибку в документации

Найдите 4 ошибки в примере ниже и нажмите **Проверить**.

<div class="doc-bug-game" id="docBugGame">
  <p><strong>POST /store/order</strong> создает новый заказ и всегда возвращает <code>200 OK</code>.</p>
  <p>Поле <code>quantity</code> может быть отрицательным, если заказ отменен заранее.</p>
  <p>Для авторизации используйте заголовок <code>X-Token</code>, параметр <code>Authorization</code> не поддерживается.</p>
  <p>Пример ответа:</p>
  <pre><code>{ "id": "abc", "status": 123, "complete": "yes" }</code></pre>
</div>

<div class="doc-bug-controls">
  <button type="button" id="checkDocBug">Проверить</button>
  <button type="button" id="resetDocBug">Сброс</button>
  <span id="docBugResult" aria-live="polite"></span>
</div>

## Подсказка

Ошибки связаны с HTTP-статусом, валидацией данных, авторизацией и типами полей ответа.
