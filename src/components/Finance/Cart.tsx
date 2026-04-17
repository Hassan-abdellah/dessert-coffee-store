import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyCart from "@/assets/images/illustration-empty-cart.svg";
import { useShopingCart } from "@/stores/useStore";
import { Fragment, useMemo } from "react";
import { ScrollArea } from "../ui/scroll-area";
import CarbonIcon from "@/assets/images/icon-carbon-neutral.svg";
import ConfirmOrderModal from "./ConfirmOrderModal";
import DeleteAllItemsModal from "./DeleteAllItemsModal";
import DeleteCartItemModal from "./DeleteCartItemModal";
import clsx from "clsx";

const Cart = () => {
  const { cartItems } = useShopingCart();
  // get the number of items in the cart
  const cartItemsNumber: number = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <Card className="bg-white border-0 sticky top-20 right-0 z-50">
      <ScrollArea
        className={clsx(
          "lg:w-92 w-[calc(100vw-30px)]",
          cartItemsNumber <= 0 ? "h-60" : "h-120",
        )}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-red font-bold">
            Your Cart ({cartItemsNumber})
          </CardTitle>

          {/* delete all items button */}
          {cartItemsNumber > 0 ? <DeleteAllItemsModal /> : null}
        </CardHeader>
        <CardContent>
          {cartItemsNumber <= 0 ? (
            <div className="h-full w-full flex flex-col items-center justify-center mt-10">
              {/* empty cart */}
              <img
                src={EmptyCart}
                alt="Empty Cart Illustration"
                className="mx-auto"
              />
              <p className="text-rose-400 text-base font-semibold text-center mt-4">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <Fragment>
              {/* display cart items */}

              {cartItems.map((cartItem) => (
                <Fragment key={cartItem.item.name}>
                  <div className="flex justify-between items-center py-4 border-b border-rose-100">
                    {/* left side */}
                    <div>
                      <div className="text-sm">{cartItem.item.name}</div>

                      {/* prices */}
                      <div className="flex  gap-3 mt-2">
                        <span className="text-sm text-red">
                          {cartItem.quantity}x
                        </span>
                        <span className="text-sm text-rose-500">
                          @ {cartItem.item.price}
                        </span>
                        <span className="text-sm font-bold text-rose-500">
                          ${cartItem.item.price * cartItem.quantity}
                        </span>
                      </div>
                    </div>

                    {/* right side */}
                    {/* Delete Cart Item */}
                    <DeleteCartItemModal productName={cartItem.item.name} />
                  </div>
                </Fragment>
              ))}

              {/* order details */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-rose-900">Order Total</span>
                <span className="text-rose-900 font-bold text-xl">
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.item.price * item.quantity,
                    0,
                  )}
                </span>
              </div>

              {/* delivery */}
              <div className="bg-rose-100 mt-4 px-2 py-4 rounded-md flex  items-center justify-center gap-2">
                <img
                  src={CarbonIcon}
                  alt="carbon neutral delivery"
                  className="w-5 h-5"
                />

                <p className="text-rose-900">
                  This is a{" "}
                  <span className="font-semibold">Carbon neutral</span> delivery
                </p>
              </div>

              {/* confirm order button */}
              <ConfirmOrderModal />
            </Fragment>
          )}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default Cart;
