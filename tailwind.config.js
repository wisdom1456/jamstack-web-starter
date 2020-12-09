module.exports = {
    theme: {
        extend: {
            colors: {
                "ws-blue": {
                    100: "#E6F0FF",
                    200: "#BFDAFF",
                    300: "#99C3FF",
                    400: "#4D97FE",
                    500: "#006AFE",
                    600: "#005FE5",
                    700: "#004098",
                    800: "#003072",
                    900: "#00204C"
                },
                "balls": {
                    300: "#F56164",
                    400: "#F7AA45",
                    500: "#E0DB4A",
                    600: "#45F76A",
                    700: "#69CCF5"
                }
            },
            backgroundImage: (theme) => ({
                mainbg: "url('./img/palmtrees.jpg')",
                "footer-texture": "url('/img/footer-texture.png')"
            })
        }
    },
    variants: {},
    plugins: [],
    purge:
        process.env.NODE_ENV === "production"
            ? {
                  enabled: true,
                  content: ["src/**/*.njk", "src/**/*.js"]
              }
            : {}
};
