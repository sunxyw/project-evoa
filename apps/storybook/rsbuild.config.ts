import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: (opts) => {
      opts.postcssOptions?.plugins?.push(require("tailwindcss"));
    },
  },
});
