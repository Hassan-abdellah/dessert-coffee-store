import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useShopingCart } from "@/stores/useStore";
import RemoveIcon from "@/assets/images/icon-remove-item.svg";

import { useState } from "react";

const DeleteCartItemModal = ({ productName }: { productName: string }) => {
  const { deleteCartItem } = useShopingCart();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="cursor-pointer border-2 border-rose-300 h-4 w-4 rounded-full flex items-center justify-center"
        aria-label="remove item from cart"
      >
        <img src={RemoveIcon} alt="remove cart item" className="w-2 h-2" />
      </DialogTrigger>

      <DialogContent className="bg-white border-0" showCloseButton={false}>
        <DialogHeader className="mb-4">
          <DialogTitle>Delete Cofirmation</DialogTitle>
        </DialogHeader>
        Are You sure you want to delete this item from the cart?
        <DialogFooter className="border-t border-rose-900 pt-4">
          <div className="flex gap-2 items-center justify-end">
            <button
              type="button"
              className="cursor-pointer bg-red text-white rounded-md px-4 py-2"
              onClick={() => {
                deleteCartItem(productName);
                setOpen(false);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="cursor-pointer bg-green text-white rounded-md px-4 py-2"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCartItemModal;
