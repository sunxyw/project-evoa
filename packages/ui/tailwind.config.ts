import type { Config } from "tailwindcss";
import { tailwindPreset } from "./tailwind-preset";

export default {
  presets: [tailwindPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
} satisfies Config;
