import { projectConfig } from '../constants/projects';
import { resolveImagePath } from './image-utils';

/**
 * Extracts all image URLs from the project configuration
 * @returns An array of all image URLs used in the project
 */
export function getAllImageUrls(): string[] {
  const imageUrls: string[] = [];

  // Add background image
  imageUrls.push(resolveImagePath('Background-image/timeline-editing.png'));

  // Add project images
  Object.values(projectConfig).forEach(project => {
    if (project.imageUrl) {
      imageUrls.push(project.imageUrl);
    }
    if (project.thumbnailUrl) {
      imageUrls.push(project.thumbnailUrl);
    }
  });

  // Remove duplicates
  return [...new Set(imageUrls)];
}

/**
 * Preloads an array of images
 * @param imageUrls Array of image URLs to preload
 * @param onProgress Optional callback to report loading progress
 * @returns A promise that resolves when all images are loaded or rejects if any image fails to load
 */
export function preloadImages(
  imageUrls: string[],
  onProgress?: (loaded: number, total: number) => void
): Promise<void[]> {
  let loadedCount = 0;
  const total = imageUrls.length;

  const imagePromises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (onProgress) {
          onProgress(loadedCount, total);
        }
        resolve();
      };
      img.onerror = () => {
        // Silently continue if an image fails to load
        loadedCount++;
        if (onProgress) {
          onProgress(loadedCount, total);
        }
        resolve(); // Resolve anyway to not block other images
      };
      img.src = url;
    });
  });

  return Promise.all(imagePromises);
}

/**
 * Preloads all images used in the project
 * @param onProgress Optional callback to report loading progress
 * @returns A promise that resolves when all images are loaded
 */
export async function preloadAllImages(
  onProgress?: (loaded: number, total: number) => void
): Promise<void> {
  const imageUrls = getAllImageUrls();
  await preloadImages(imageUrls, onProgress);
}
