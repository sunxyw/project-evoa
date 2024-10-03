import { tailwindContent, tailwindPreset } from "@repo/ui/tailwind-preset";
import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  presets: [tailwindPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}", tailwindContent()],
  plugins: [tailwindTypography()],
} satisfies Config;
