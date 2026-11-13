// Cloudflare Worker: eneszengin.com/atama için Elsevier API ara sunucusu.
// Anahtar Worker'da gizli değişken olarak durur: ELS_KEY (Settings > Variables and Secrets).
const ALLOWED_ORIGINS = ["https://eneszengin.com", "https://www.eneszengin.com"];
const ALLOWED_PATHS = [/^\/content\/author\/author_id\/\d+$/, /^\/content\/search\/scopus$/, /^\/content\/serial\/title\/issn\/[\dXx-]+$/];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Accept",
      Vary: "Origin",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "GET" || !ALLOWED_ORIGINS.includes(origin)) return new Response("Forbidden", { status: 403, headers: cors });

    const url = new URL(request.url);
    if (!ALLOWED_PATHS.some((re) => re.test(url.pathname))) return new Response("Not found", { status: 404, headers: cors });

    const upstream = await fetch("https://api.elsevier.com" + url.pathname + url.search, {
      headers: { "X-ELS-APIKey": env.ELS_KEY, Accept: "application/json" },
      cf: { cacheTtl: 86400, cacheEverything: true },
    });
    const res = new Response(upstream.body, upstream);
    for (const [k, v] of Object.entries(cors)) res.headers.set(k, v);
    res.headers.delete("set-cookie");
    return res;
  },
};
