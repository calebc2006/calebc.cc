module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },

            fontSize: {
                "5xl": ["4.3rem", "4.75rem"],
                "4xl": ["2.1rem", "2.3rem"],
                "2xl": ["1.5rem", "1.8rem"],
                m: ["0.95rem", "1.3rem"],
                s: ["0.7rem", "0.85rem"],
                sm: ["0.6rem", "0.7rem"],
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [require("daisyui")],
}
