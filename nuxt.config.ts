// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["@/assets/main.css"],
    modules: [
        [
            "@storyblok/nuxt",
            {
                accessToken: "YsHqvxZQeMdJ43sr03WaQgtt",
                apiOptions: { region: "us" },
            },
        ],
    ],
});
