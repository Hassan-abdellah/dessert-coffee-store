import type { cartItemType, productType } from "@/types";
import ProductImage from "./ProductImage";
import { useShopingCart } from "@/stores/useStore";
import { useMemo } from "react";
import DecreaseCartItemSVG from "../Icons/DecreaseCartItemSVG";
import IncreaseCartItemSVG from "../Icons/IncreaseCartItemSVG";
import AddToCartSVG from "../Icons/AddToCartSVG";
import clsx from "clsx";

const ProductCard = ({ item }: { item: productType }) => {
  const { cartItems, addCartItem, updateCartItem } = useShopingCart();

  // check if the item is already in the cart
  const isItemInCart: cartItemType | undefined = useMemo(() => {
    return cartItems.find((el) => el.item.name === item.name);
  }, [cartItems, item.name]);

  return (
    <div className="rounded-lg">
      {/* product image */}
      <div
        className={clsx(
          "relative rounded-md w-72 h-62 transition-all duration-150",
          isItemInCart ? "ring-2 ring-red" : "",
        )}
      >
        <ProductImage
          src={item.image}
          alt={item.name}
          className="w-full h-full rounded-md"
        />

        {isItemInCart ? (
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-white font-semibold cursor-pointer border border-red rounded-3xl px-3 py-2 bg-red flex items-center justify-between w-36">
            <button
              type="button"
              aria-label="decrease quantity"
              className="group cursor-pointer rounded-full border-2 border-white w-5 h-5 flex items-center justify-center hover:bg-white transition-colors"
              onClick={() =>
                updateCartItem({
                  productName: item.name,
                  quantity: isItemInCart.quantity - 1,
                })
              }
            >
              <DecreaseCartItemSVG pathClassNames="fill-white transition-colors group-hover:fill-red" />
            </button>

            <span className="text-white font-bold">
              {isItemInCart?.quantity}
            </span>

            <button
              type="button"
              aria-label="increase quantity"
              className="group cursor-pointer rounded-full border-2 border-white w-5 h-5 flex items-center justify-center hover:bg-white transition-colors"
              onClick={() =>
                updateCartItem({
                  productName: item.name,
                  quantity: isItemInCart.quantity + 1,
                })
              }
            >
              <IncreaseCartItemSVG pathClassNames="fill-white transition-colors group-hover:fill-red" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="group absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-rose-900 font-semibold cursor-pointer border border-red rounded-3xl px-4 py-2 bg-rose-50 flex items-center gap-1 transition-all hover:text-white hover:bg-red hover:drop-shadow-red hover:drop-shadow-sm"
            onClick={() => addCartItem({ item: item, quantity: 1 })}
          >
            <AddToCartSVG classNames="fill-red transition-colors group-hover:fill-white" />
            Add to Cart
          </button>
        )}
      </div>

      {/* product content */}
      <div className="p-1 flex flex-col mt-6">
        <p className="text-rose-400">{item.category}</p>
        <h2 className="text-xl font-bold text-rose-900">{item.name}</h2>
        <p className="text-red font-semibold">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
