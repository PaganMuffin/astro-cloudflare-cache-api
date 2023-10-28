import { defineMiddleware } from "astro:middleware";
import { Response as Response2 } from "miniflare";

export const onRequest = defineMiddleware(async (context, next) => {
    const { request } = context;
    const { url } = request;

    const cache = context.locals.runtime.caches.default;

    const cacheResponse = await cache.match(url);
    if (cacheResponse) {
        console.log("Cache hit");
        return cacheResponse;
    }

    const response = await next();

    response.headers.set("cache-control", "public, max-age=60");
    response.headers.set("content-type", "text/html");

    await cache.put(url, new Response2(response.body, response));

    return response;
});
