import { useImageLoader } from "@/hooks/useImageLoader";
import type { prodcutImageType } from "@/types";
import { Skeleton } from "../ui/skeleton";

const ProductImage = ({
  src,
  alt,
  className = "",
}: {
  src: prodcutImageType;
  alt: string;
  className: string;
}) => {
  const { images, loading, error } = useImageLoader(src);

  if (loading) {
    return <Skeleton className="rounded-md w-72 h-62 mb-4 bg-rose-50" />;
  }

  if (error) {
    return (
      <div
        className={`${className} bg-red-50 flex items-center justify-center`}
      >
        <span className="text-red-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <picture>
      {/* Mobile */}
      <source media="(max-width: 768px)" srcSet={images.mobile} />
      {/* Tablet */}
      <source media="(max-width: 1024px)" srcSet={images.tablet} />
      {/* Desktop */}
      <source srcSet={images.desktop} />
      {/* Fallback */}
      <img src={images.desktop} alt={alt} className={className} />
    </picture>
  );
};

export default ProductImage;
