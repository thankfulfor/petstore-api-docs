# Interactive API

Интерактивная версия API-спецификации Swagger Petstore для быстрого тестирования запросов.

<div id="swagger-ui"></div>

<script>
  async function resolveSpecUrl() {
    const candidates = [
      "/portfolio/openapi/openapi.yaml",
      "/openapi/openapi.yaml"
    ];

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { method: "GET" });
        if (response.ok) return candidate;
      } catch (e) {
        // try next
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
[Открыть issue по Interactive API](https://github.com/thankfulfor/portfolio/issues/new?template=blank_issues)
