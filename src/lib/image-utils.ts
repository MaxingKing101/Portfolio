/**
 * Utility functions for handling image paths across different environments
 */

/**
 * Resolves an image path based on the current environment and deployment platform
 * @param relativePath The relative path to the image from the public directory
 * @returns The fully resolved path to the image
 */
export function resolveImagePath(relativePath: string): string {
  if (process.env.NODE_ENV === 'production') {
    // Check if we're on GitHub Pages
    if (window.location.hostname === 'maxingkingvfx.github.io') {
      return `https://maxingkingvfx.github.io/portfolio/${relativePath}`;
    }
    // Check if we're on Cloudflare Pages
    if (window.location.hostname.includes('pages.dev')) {
      return `/${relativePath}`; // Cloudflare Pages uses relative paths
    }
    // Default to relative path for other production environments
    return `/${relativePath}`;
  }
  // Local development
  return `/${relativePath}`;
}
