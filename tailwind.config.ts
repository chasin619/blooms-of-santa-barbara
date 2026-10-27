import type { Config } from "tailwindcss";

/**
 * Blooms of Santa Barbara palette: petal (warm ivory) for the page, blush for the soft bands,
 * rose for links, eyebrows and the small romantic notes, sage for foliage touches, deep plum for
 * the dark bands and text, and a little champagne gold on hairlines and dividers.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petal: "#FCF8F5",
        blush: {
          50: "#FAF1ED",
          100: "#F6E6E0",
          200: "#F0D6CE",
          300: "#E7C1B7",
          400: "#DBA79C",
        },
        rose: {
          300: "#DCA6AB",
          400: "#CD8A91",
          500: "#BA6E78",
          600: "#A2555F",
          700: "#83424B",
        },
        sage: {
          100: "#EAEFE7",
          200: "#D5DFD1",
          300: "#B9CAB4",
          400: "#9AB094",
          500: "#7E9778",
          600: "#637C5E",
        },
        plum: {
          700: "#5B3E48",
          800: "#49313B",
          900: "#38252D",
          950: "#2B1B22",
        },
        gold: {
          300: "#EADCBE",
          400: "#DAC395",
          500: "#C7AA72",
        },
        ink: "#352429",
        muted: "#7A666C",
      },
      fontFamily: {
        display: ["var(--font-italiana)", "Italiana", "Didot", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "Nunito Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
        brand: "0.22em",
      },
      maxWidth: {
        content: "78rem",
        prose2: "46rem",
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(56, 37, 45, 0.35)",
        petal: "0 12px 40px -18px rgba(186, 110, 120, 0.45)",
      },
      borderRadius: {
        arch: "999px 999px 6px 6px",
      },
    },
  },
  plugins: [],
} satisfies Config;
