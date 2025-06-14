export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Xiaomi 12",
            model: "cupid",
        },
        {
            name: "Xiaomi 12S",
            model: "mayfly",
        },
        {
            name: "Xiaomi 12 Pro",
            model: "zeus",
        },
        {
            name: "Xiaomi 12S Pro",
            model: "unicorn",
        },
        {
            name: "Xiaomi 12T Pro",
            model: "diting",
        },
    ],
    RELEASE_VARIANTS: {
        GAPPS: {
            description: "Normal Google apps and services.",
            suffix: "",
        },
    },
    DONATION_LINKS: [
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/dopaemon",
            icon: "paypal",
        },
    ],
};
