/// <reference types="astro/client" />

type ENV = {};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
    interface Locals extends Runtime {}
}
