// src/hooks/useImageLoader.ts
import type { prodcutImageType } from "@/types";

export function useImageLoader(imagePaths: prodcutImageType) {
  return {
    images: imagePaths,
    loading: false,
    error: null,
  };
}
