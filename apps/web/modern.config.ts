import { appTools, defineConfig } from "@modern-js/app-tools";
import { garfishPlugin } from "@modern-js/plugin-garfish";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  deploy: {
    microFrontend: true,
  },
  plugins: [
    appTools({
      bundler: "rspack",
    }),
    tailwindcssPlugin(),
    garfishPlugin(),
  ],
});
