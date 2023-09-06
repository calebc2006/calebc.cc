const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "calebccc.000webhostapp.com",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
}
