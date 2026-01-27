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
    return <Skeleton className="w-82 h-64 rounded-md mb-4 bg-rose-50" />;
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

  return <img src={images.desktop} alt={alt} className={`${className}`} />;
};

export default ProductImage;
