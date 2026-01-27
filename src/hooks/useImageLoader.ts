// src/hooks/useImageLoader.ts
import type { prodcutImageType } from "@/types";
import { useState, useEffect } from "react";

export function useImageLoader(imagePaths: prodcutImageType) {
  const [images, setImages] = useState<prodcutImageType>({
    thumbnail: "",
    mobile: "",
    tablet: "",
    desktop: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const loadSingleImage = async (path: string) => {
          try {
            // Remove './' if present
            const cleanPath = path.startsWith("./") ? path.substring(2) : path;
            const imageModule = await import(
              /* @vite-ignore */ `../${cleanPath}`
            );
            return imageModule.default.replace("/@fs/src", "");
          } catch (err) {
            console.error(`Failed to load image: ${path}`);
            console.error(`Failed to load image: ${err}`);
            // Return a placeholder or empty string
            return "";
          }
        };

        const [thumbnail, mobile, tablet, desktop] = await Promise.all([
          loadSingleImage(imagePaths.thumbnail),
          loadSingleImage(imagePaths.mobile),
          loadSingleImage(imagePaths.tablet),
          loadSingleImage(imagePaths.desktop),
        ]);

        setImages({ thumbnail, mobile, tablet, desktop });
      } catch (err) {
        setError("Failed to load images");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [imagePaths]);

  return { images, loading, error };
}
