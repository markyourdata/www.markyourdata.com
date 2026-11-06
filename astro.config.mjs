import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.markyourdata.com",
  trailingSlash: "never",
  compressHTML: false,
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => !/\/(demo|thank-you)$/.test(page),
    }),
  ],
});
