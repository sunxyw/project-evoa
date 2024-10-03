import { tailwindContent, tailwindPreset } from "@repo/ui/tailwind-preset";
import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

export default {
  presets: [tailwindPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}", tailwindContent()],
  plugins: [tailwindTypography()],
} satisfies Config;
