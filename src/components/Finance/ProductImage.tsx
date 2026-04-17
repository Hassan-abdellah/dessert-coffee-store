import { useImageLoader } from "@/hooks/useImageLoader";
import type { prodcutImageType } from "@/types";
import { Skeleton } from "../ui/skeleton";
import { Fragment, useEffect, useRef, useState } from "react";

const ProductImage = ({
  src,
  alt,
  className = "",
}: {
  src: prodcutImageType;
  alt: string;
  className: string;
}) => {
  const { images } = useImageLoader(src);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <Fragment>
      {!loaded && <Skeleton className="w-82 h-82 rounded-none bg-gray-100" />}

      <picture>
        {!error && (
          <>
            {/* Mobile */}
            <source media="(max-width: 768px)" srcSet={images.mobile} />
            {/* Tablet */}
            <source media="(max-width: 1024px)" srcSet={images.tablet} />
            {/* Desktop */}
            <source srcSet={images.desktop} />
          </>
        )}

        <img
          ref={imgRef}
          src={images.desktop}
          alt={alt}
          loading="lazy"
          className={className}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      </picture>
    </Fragment>
  );
};

export default ProductImage;
