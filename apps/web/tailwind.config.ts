import { tailwindContent, tailwindPreset } from "@repo/ui/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  presets: [tailwindPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}", tailwindContent()],
} satisfies Config;
