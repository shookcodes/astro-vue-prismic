import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: vercel(),
	integrations: [vue(), tailwind()],
	pages: {
		"**/*.vue": {
			// Page configuration for Vue files
			template: "Vue", // Use the Vue template
		},
	},
	exclude: ["**/pages/slices-simulator.vue"],
});
