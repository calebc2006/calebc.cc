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
            borderRadius: {
                "4xl": "2rem",
            },
            fontSize: {
                "5xl": ["5rem", "5.5rem"],
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
