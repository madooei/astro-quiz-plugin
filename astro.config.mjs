import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
  site: "https://madooei.github.io",
  base: "/astro-quiz-plugin",
});
