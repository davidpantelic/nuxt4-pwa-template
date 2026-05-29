// pwa-assets.config.ts
import {
  defineConfig,
  minimalPreset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset,
  images: [
    "public/favicon.svg", // Points the tool to your primary high-res icon source
  ],
});
