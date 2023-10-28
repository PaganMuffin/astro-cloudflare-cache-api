import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    image: {
        service: {
            entrypoint: "astro/assets/services/noop",
        },
    },
    output: "server",
    adapter: cloudflare({ runtime: { mode: "local" } }),
});
