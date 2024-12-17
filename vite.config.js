import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "redux-devtools-extension": "@redux-devtools/extension",
    },
  },
});
