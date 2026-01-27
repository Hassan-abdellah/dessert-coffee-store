import type { productType } from "@/types";
import ProductImage from "./ProductImage";
import AddToCartIcon from "@/assets/images/icon-add-to-cart.svg";

const ProductCard = ({ dessert }: { dessert: productType }) => {
  return (
    <div className="rounded-lg">
      {/* product image */}
      <div className="relative">
        <ProductImage
          src={dessert.image}
          alt={dessert.name}
          className="w-82 h-64 rounded-md"
        />

        <button
          type="button"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-rose-900 font-semibold cursor-pointer border border-red rounded-3xl px-4 py-2 bg-rose-50 flex items-center gap-1 transition-colors hover:text-red"
        >
          <img src={AddToCartIcon} alt="Add to Cart" className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>

      {/* product content */}
      <div className="p-1 flex flex-col mt-6">
        <p className="text-rose-400">{dessert.category}</p>
        <h2 className="text-xl font-bold text-rose-900">{dessert.name}</h2>
        <p className="text-red font-semibold">${dessert.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
