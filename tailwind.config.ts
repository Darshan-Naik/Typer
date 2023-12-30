import type { Config } from "tailwindcss";

const colors = {
  white: "#fff",
  black: "#000",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textColor: {
      primary: {
        DEFAULT: "var(--primary-text)",
      },
      secondary: {
        DEFAULT: "var(--secondary-text)",
      },
      disabled: {
        DEFAULT: "var(--disabled-text)",
      },
      error: {
        DEFAULT: "var(--error-text)",
      },
      success: {
        DEFAULT: "var(--success-text)",
      },
      ...colors,
    },
    backgroundColor: {
      primary: {
        DEFAULT: "var(--primary-bg)",
      },
      secondary: {
        DEFAULT: "var(--secondary-bg)",
      },
      ...colors,
    },
    colors,
    borderColor: {
      primary: {
        DEFAULT: "var(--primary-border)",
      },
      ...colors,
    },
  },
  plugins: [],
};

export default config;
