// Image optimization utilities that work with existing images

export interface ImageLoadOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  width?: number;
  height?: number;
}

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map(src => preloadImage(src));
  await Promise.allSettled(promises);
};

/**
 * Get image dimensions without loading the full image
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Create a low-quality placeholder for progressive loading
 */
export const createImagePlaceholder = (src: string, quality: number = 0.1): string => {
  // This is a simple approach - in a real app you might use a service like Cloudinary
  // or implement actual image compression
  return src;
};

/**
 * Check if image is cached
 */
export const isImageCached = (src: string): boolean => {
  const img = new Image();
  img.src = src;
  return img.complete;
};

/**
 * Batch load images with priority
 */
export const batchLoadImages = async (
  images: string[], 
  priorityCount: number = 3
): Promise<void> => {
  // Load priority images first
  const priorityImages = images.slice(0, priorityCount);
  const remainingImages = images.slice(priorityCount);
  
  // Load priority images immediately
  await preloadImages(priorityImages);
  
  // Load remaining images in background
  if (remainingImages.length > 0) {
    setTimeout(() => {
      preloadImages(remainingImages);
    }, 100);
  }
};

/**
 * Create intersection observer for lazy loading
 */
export const createLazyLoadObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};
