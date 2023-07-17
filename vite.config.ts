import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import loadVersion from "vite-plugin-package-version";
import { VitePWA } from "vite-plugin-pwa";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          "@babel/preset-typescript",
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "entry",
              corejs: {
                version: "3.29",
              },
            },
          ],
        ],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globIgnores: ["**ping.txt**"],
      },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "safari-pinned-tab.svg",
      ],
      manifest: {
        name: "KHFlix",
        short_name: "KHFlix",
        description: "Discover a world of free streaming movies on our platform. Explore an extensive collection of films spanning different genres, all available to watch at no cost. From gripping action to heartwarming dramas and side-splitting comedies, there's something for everyone. With our user-friendly interface, finding and streaming your favorite movies is a breeze. Say hello to unlimited entertainment and start enjoying your favorite films instantly. No subscriptions required. Begin your cinematic journey today!",
        theme_color: "#120f1d",
        background_color: "#120f1d",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
    loadVersion(),
    checker({
      typescript: true, // check typescript build errors in dev server
      eslint: {
        // check lint errors in dev server
        lintCommand: "eslint --ext .tsx,.ts src",
        dev: {
          logLevel: ["error"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    environment: "jsdom",
  },
});
