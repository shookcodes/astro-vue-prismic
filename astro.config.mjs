import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  pages: {
    "**/*.vue": {
      // Page configuration for Vue files
      template: "Vue" // Use the Vue template
    }
  },

  exclude: ["**/pages/slices-simulator.vue"],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});