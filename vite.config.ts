import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/portfolio/",  // Trailing slash for subpath consistency
  server: {
    host: "0.0.0.0",    // Standard IPv4 fallback
    port: 8080,
    open: mode === "development" // Auto-open in dev
  },
  build: {
    minify: mode === "production" ? "terser" : false,
    sourcemap: mode === "development",
    rollupOptions: {
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
    react({
      jsxImportSource: "@emotion/react",
      // Removed invalid 'devtools' property
    }),
    mode === 'development' && componentTagger() as PluginOption
  ].filter(Boolean),
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@public", replacement: path.resolve(__dirname, "./public") }
    ]
  },
  envDir: "../", // Root directory for environment files
  define: {
    __BASE_URL__: JSON.stringify("/portfolio/") // Global constant
  },
  assetsInclude: ["**/*.mov", "**/*.mp4"] // Add video formats
}));