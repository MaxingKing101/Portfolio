import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/portfolio/",
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: mode === "development"
  },
  build: {
    minify: mode === "production" ? "terser" : false,
    sourcemap: mode === "development",
    rollupOptions: {
      external: ["@emotion/react/jsx-runtime"], // Add explicit external
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["lodash", "date-fns"],
          shadcn: ["@radix-ui/*"]
        }
      }
    }
  },
  plugins: [
    react({ // Remove emotion reference unless needed
      jsxImportSource: "react", // Default to React's JSX runtime
    }),
    mode === 'development' && componentTagger() as PluginOption
  ].filter(Boolean),
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@public", replacement: path.resolve(__dirname, "./public") }
    ]
  }
}));