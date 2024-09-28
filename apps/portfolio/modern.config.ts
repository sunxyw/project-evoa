import { appTools, defineConfig } from "@modern-js/app-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
    port: 3081,
  },
  plugins: [
    appTools({
      bundler: "rspack",
    }),
    tailwindcssPlugin(),
  ],
});
