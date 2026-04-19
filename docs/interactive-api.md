# Interactive API

Интерактивная версия API-спецификации Swagger Petstore для быстрого тестирования запросов.

<div id="swagger-ui"></div>

<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
<script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script>
  window.addEventListener('load', function () {
    window.ui = SwaggerUIBundle({
      url: '../openapi/openapi.yaml',
      dom_id: '#swagger-ui',
      deepLinking: true,
      docExpansion: 'list',
      presets: [SwaggerUIBundle.presets.apis],
    });
  });
</script>
