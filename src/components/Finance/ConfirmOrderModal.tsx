import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConfrimIcon from "@/assets/images/icon-order-confirmed.svg";
import { useShopingCart } from "@/stores/useStore";
import { Fragment } from "react";
import { ScrollArea } from "../ui/scroll-area";

const ConfirmOrderModal = () => {
  const { cartItems } = useShopingCart();

  return (
    <Dialog modal={true}>
      <DialogTrigger
        className="mt-4 bg-red text-white cursor-pointer border border-red rounded-3xl w-full px-20 py-2 transition-all hover:drop-shadow-red hover:drop-shadow-sm"
        aria-label="confirm order"
      >
        Confirm Order
      </DialogTrigger>
      <DialogContent className="bg-white border-0" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>
            <img
              src={ConfrimIcon}
              alt="Order Confirmed"
              className="w-10 h-10"
            />
            <h2 className="text-rose-900 text-3xl font-bold mt-4">
              Order Confirmed
            </h2>
          </DialogTitle>
          <DialogDescription className="text-rose-500 mb-4">
            We hope you enjoy your food!
          </DialogDescription>
        </DialogHeader>

        {/* display cart items */}
        <ScrollArea className="max-h-[50vh]">
          <div className="bg-rose-50 px-6 py-4 rounded-md">
            {cartItems.map((cartItem) => (
              <Fragment key={cartItem.item.name}>
                <div className="flex justify-between items-center py-4 border-b border-rose-100">
                  {/* left side */}
                  <div className="flex gap-4">
                    <img
                      src={cartItem.item.image.thumbnail}
                      alt={cartItem.item.name}
                      className="w-14 h-14 object-cover rounded-md"
                    />

                    <div>
                      <div className="text-base font-semibold">
                        {cartItem.item.name}
                      </div>

                      {/* prices */}
                      <div className="flex  gap-3 mt-2">
                        <span className="text-sm text-red">
                          {cartItem.quantity}x
                        </span>
                        <span className="text-sm text-rose-500">
                          @ {cartItem.item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* right side */}

                  <div>
                    <span className="text-sm font-bold text-rose-900">
                      ${cartItem.item.price * cartItem.quantity}
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}

            {/* order totals */}
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
          </div>
        </ScrollArea>

        {/* confirm order  */}

        <button
          type="button"
          className="mt-4 bg-red text-white cursor-pointer border border-red rounded-3xl w-full px-20 py-2 transition-all hover:drop-shadow-red hover:drop-shadow-sm"
          aria-label="confirm order"
        >
          Start New Order
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmOrderModal;
