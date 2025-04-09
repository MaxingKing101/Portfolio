import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/portfolio/' : '/'; // Use '/portfolio/' for GitHub Pages, '/' for local dev

  return {
    base,
    server: {
      host: "0.0.0.0",
      port: 8080,
      open: mode === "development",
    },
    build: {
      minify: isProduction ? "terser" : false,
      sourcemap: !isProduction,
      rollupOptions: {
        external: ["@emotion/react/jsx-runtime"],
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('@radix-ui')) return 'radix-ui';
              if (id.includes('date-fns')) return 'date-fns';
              if (id.includes('lodash')) return 'lodash';
              return 'vendor';
            }
            return null;
          },
        },
      },
    },
    plugins: [
      react({
        jsxImportSource: "react",
      }),
      mode === 'development' && componentTagger() as PluginOption,
    ].filter(Boolean),
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src") },
        { find: "@public", replacement: path.resolve(__dirname, "./public") },
      ],
    },
  };
});