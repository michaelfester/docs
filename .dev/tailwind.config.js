const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./markdoc/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        window:
          "0 0 0 0.5px rgba(0,0,0,0.08), 0 25px 50px -12px rgba(0,0,0,0.25)",
        card: "0 50px 50px rgba(62, 65, 86, 0.08), 0 72px 100px rgba(62, 65, 86, 0.12)",
        "card-strong":
          "0 20px 40px rgba(62, 65, 86, 0.08), 0 72px 100px rgba(62, 65, 86, 0.22)",
        light: "0 11px 29px rgba(0, 0, 0, 0.08)",
        button:
          "0 0px 1.5px rgba(0, 0, 0, 0.1), 0 11px 29px rgba(0, 0, 0, 0.08)",
        strong: "0 13px 24px rgba(0, 0, 0, 0.15)",
        "card-small":
          "0px 1px 6px rgba(0, 0, 0, 0.03), 0px 4px 8px rgba(62, 65, 86, 0.09)",
        subtle: "0 16px 44px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        aqua: "#12CCE5",
        "aqua-light": "#E6F9FC",
        "neutrals-light": {
          1: "#FFFFFF",
          2: "#F8F8F8",
          3: "#F4F4F4",
          4: "#E9E9E9",
          5: "#D2D2D3",
          6: "#BCBCBD",
          7: "#A5A6A7",
          8: "#908F91",
          9: "#79797C",
          10: "#626366",
          11: "#4C4D50",
          13: "#2A2B2F",
          14: "#26272B",
          15: "#1F2024",
        },
      },
      fontFamily: {
        sans: ["Matter", ...defaultTheme.fontFamily.sans],
        display: ["ES Build", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xsm: ["0.688rem", "1.27"],
        xs: ".75rem",
        sm: ["0.875rem", "1.27"],
        md: ["1rem", "1.4"],
        btn: ["1.125rem", "1"], //yesh, fix this
        lg: ["1.25rem", "1.4"],
        xlg: ["1.5rem", "1.4"],
        xxl: ["1.8rem", "1.4"],
        pullout: ["2.5rem", "1.3"],
        massive: ["10.875rem", { letterSpacing: "-0.03em", lineHeight: "95%" }],

        // new design system
        xs: [".75rem", "1.33"],
        sm: ["0.875rem", "1.27"],
        md: ["1rem", "1.38"],
        lg: ["1.25rem", "1.4"],
        xl: ["1.375rem", "1.36"],

        // 3xl - 8xl, match h6 - h1
        "3xl": ["1.875rem", { letterSpacing: "-0.01em", lineHeight: "110%" }],
        "4xl": ["2.25rem", { letterSpacing: "-0.01em", lineHeight: "111%" }],
        "5xl": ["3rem", { letterSpacing: "-0.02em", lineHeight: "121%" }],
        "6xl": ["3.75rem", { letterSpacing: "-0.03em", lineHeight: "113%" }],
        "7xl": ["4.5rem", { letterSpacing: "-0.03em", lineHeight: "108%" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
