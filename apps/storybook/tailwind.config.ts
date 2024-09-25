import type { Config } from "tailwindcss";
import { tailwindContent, tailwindPreset } from "@repo/ui/tailwind-preset";

export default {
  presets: [tailwindPreset],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    tailwindContent(),
  ],
} satisfies Config;
