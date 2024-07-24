import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                color1: "#ef2c5a",
                color2: "#191919",
                color3: "#fff",
            },
            boxShadow: {
                headerShadow:
                    "rgba(0, 0, 0, 0.18) 0px 0.48175px 0.48175px -1.25px, rgba(0, 0, 0, 0.16) 0px 1.83083px 1.83083px -2.5px, rgba(0, 0, 0, 0.063) 0px 8px 8px -3.75px;",
        },
      
        },
    },
    plugins: [],
};
export default config;
