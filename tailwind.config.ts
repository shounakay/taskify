import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    // "./src/app/(group-name)/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "*",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-firaCode)", ...fontFamily.sans],
      },
      backgroundImage: {
        maingrad:
          "linear-gradient(180deg, #434242, #454444, #4c494a, #565253, #635c5f, #70686e, #7c757e, #87838f, #908f9e, #969aaa, #9aa1b2, #9ba4b5)",
        bg1: "url('/bg-1.svg')",
        bg2: "url('/bg-2.svg')",
        bg3: "url('/bg-3.svg')",
      },
      screens: {
        xss: "360px",
        xs: "460px",
      },
      boxShadow: {
        btns: "2.3px_1.8px_2.4px_rgba(0, 0, 0, 0.037),5.5px_4.3px_5.8px_rgba(0, 0, 0, 0.053),10.3px_8.1px_10.9px_rgba(0, 0, 0, 0.065),18.3px_14.5px_19.4px_rgba(0, 0, 0, 0.077), 34.3px_27.2px_36.3px_rgba(0, 0, 0, 0.093), 82px_65px_87px_rgba(0, 0, 0, 0.13)",
      },
      colors: {
        tuna: {
          "50": "#f5f5f9",
          "100": "#e9e9f0",
          "200": "#d7d8e6",
          "300": "#bcbdd4",
          "400": "#9c9dbe",
          "500": "#8583ae",
          "600": "#76729e",
          "700": "#6c6590",
          "800": "#5c5677",
          "900": "#4c4860",
          "950": "#393646",
        },
        "ebony-clay": {
          "50": "#f5f7fa",
          "100": "#e9edf5",
          "200": "#cfd8e8",
          "300": "#a4b7d5",
          "400": "#7391bd",
          "500": "#5273a5",
          "600": "#3f5a8a",
          "700": "#344a70",
          "800": "#2e3f5e",
          "900": "#2a3750",
          "950": "#212a3e",
        },
        "santas-gray": {
          "50": "#f5f7f8",
          "100": "#edf0f2",
          "200": "#dee3e7",
          "300": "#c9d0d8",
          "400": "#b2bbc7",
          "500": "#9ba4b5",
          "600": "#878ea4",
          "700": "#747a8e",
          "800": "#5f6574",
          "900": "#50545f",
          "950": "#2f3237",
        },
        porcelain: {
          "50": "#f1f6f9",
          "100": "#e9f0f5",
          "200": "#cee1e9",
          "300": "#a3c6d6",
          "400": "#72a9be",
          "500": "#508ea7",
          "600": "#3d738c",
          "700": "#325d72",
          "800": "#2d4f5f",
          "900": "#294351",
          "950": "#1b2c36",
        },
        // 2
        "curious-blue": {
          "50": "#eff9ff",
          "100": "#dff2ff",
          "200": "#b7e7ff",
          "300": "#77d6ff",
          "400": "#2fc2ff",
          "500": "#039cdf",
          "600": "#0088d1",
          "700": "#006ca9",
          "800": "#015c8b",
          "900": "#074c73",
          "950": "#05304c",
        },

        "quarter-spanish-white": {
          "50": "#faf7f0",
          "100": "#f4eee0",
          "200": "#e0cfa7",
          "300": "#d0b279",
          "400": "#c59c5a",
          "500": "#ba8346",
          "600": "#a4693b",
          "700": "#895134",
          "800": "#71412f",
          "900": "#5d372a",
          "950": "#341c14",
        },
        "salt-box": {
          "50": "#f7f7f8",
          "100": "#f2f0f3",
          "200": "#e6e3e7",
          "300": "#d3ccd5",
          "400": "#b8acba",
          "500": "#a091a3",
          "600": "#89778b",
          "700": "#6d5d6e",
          "800": "#605361",
          "900": "#534853",
          "950": "#2e282f",
        },
        mortar: {
          "50": "#f7f6f8",
          "100": "#ece9f0",
          "200": "#ddd9e4",
          "300": "#c5bed2",
          "400": "#a99fbb",
          "500": "#9788a9",
          "600": "#88769a",
          "700": "#7c6a8b",
          "800": "#685974",
          "900": "#4f4557",
          "950": "#36303b",
        },

        // random
        masala: {
          "50": "#f6f5f5",
          "100": "#e7e6e6",
          "200": "#d1d0d0",
          "300": "#b1afaf",
          "400": "#898787",
          "500": "#6e6c6c",
          "600": "#5e5c5c",
          "700": "#504f4e",
          "800": "#434242",
          "900": "#3d3c3c",
          "950": "#262626",
        },
        shark: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#222222",
        },
        "breaker-bay": {
          "50": "#f1fcfa",
          "100": "#d0f7f1",
          "200": "#a2ede5",
          "300": "#6bddd4",
          "400": "#3cc5be",
          "500": "#22a39f",
          "600": "#1a8787",
          "700": "#196b6c",
          "800": "#185657",
          "900": "#184949",
          "950": "#08292b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
