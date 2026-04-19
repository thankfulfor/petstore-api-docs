# Interactive API

Интерактивная версия API-спецификации Swagger Petstore для быстрого тестирования запросов.

<div id="swagger-ui"></div>

<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
<script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script>
  async function resolveSpecUrl() {
    const candidates = [
      "../openapi/openapi.yaml",
      "./openapi/openapi.yaml",
      "../latest/openapi/openapi.yaml",
      "/petstore-api-docs/latest/openapi/openapi.yaml",
      "/petstore-api-docs/openapi/openapi.yaml",
    ];

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { method: "GET" });
        if (response.ok) return candidate;
      } catch (e) {
        // Try next candidate
      }
    }
    return candidates[0];
  }

  window.addEventListener("load", async function () {
    const specUrl = await resolveSpecUrl();
    window.ui = SwaggerUIBundle({
      url: specUrl,
      dom_id: "#swagger-ui",
      deepLinking: true,
      docExpansion: "list",
      presets: [SwaggerUIBundle.presets.apis],
    });
  });
</script>

## Обратная связь

Если в Swagger UI не загружается контракт или есть ошибки в примерах:  
[Открыть issue по Interactive API](https://github.com/thankfulfor/petstore-api-docs/issues/new?template=blank_issues)
