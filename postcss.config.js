export default {
  plugins: {
    'postcss-import': {}, // Add import support
    'tailwindcss/nesting': {}, // Enable modern nesting syntax
    tailwindcss: { config: './tailwind.config.ts' }, // Explicit config path
    autoprefixer: {
      overrideBrowserslist: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie 11' // Explicit browser targets
      ]
    },
    // cssnano: process.env.NODE_ENV === 'production' ? {} : false // Minify in production
  },
  // Enable source maps in development
  map: process.env.NODE_ENV !== 'production' ? 'inline' : false
}