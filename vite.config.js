import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import Unfonts from "unplugin-fonts/vite";
import { meta } from "vite-plugin-meta-tags";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";
import convertWebp from "./src/js/services/convertWebp";
import legacy from "@vitejs/plugin-legacy";

const baseName = `/${path.basename(process.cwd())}`;

export default defineConfig({
    base: baseName,
    build: {
        rollupOptions: {
            input: {
                index: "index.html",
            },
        },
    },

    plugins: [
        Unfonts({
            custom: {
                families: [
                    {
                        name: "Formular",
                        local: "Formular",
                        src: "src/font/Formular-Regular.woff2",
                    },
                    {
                        name: "Formular",
                        local: "Formular",
                        src: "src/font/Formular-Black.woff2",
                    },
                    {
                        name: "Formular",
                        local: "Formular",
                        src: "src/font/Formular-Light.woff2",
                    },
                    {
                        name: "Formular",
                        local: "Formular",
                        src: "src/font/Formular-Bold.woff2",
                    },
                ],
                display: "swap",
                preload: true,
                injectTo: "head-prepend",
            },
        }),
        tailwindcss(),
        meta({
            title: "FromBoard",
            description: "FromBoard Delivery",
            url: "https://fromBoard.by/",
            img: "/images/meta-og-image.jpg",
            color: "#f9fafb",
        }),
        vitePluginFaviconsInject("src/favicon/favicon.png", {
            background: "#f9fafb",
            path: "assets/fav",
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                favicons: true,
                windows: false,
                yandex: true,
            },
            appName: "FromBoard",
            appShortName: "FromBoard",
            appDescription: "FromBoard Delivery",
        }),
        convertWebp({
            inputDir: "dist",
            width: 1920,
            quality: 80,
            excludeFolder: ["images"],
        }),
        legacy({
            targets: ["defaults"],
        }),
    ],
});
