import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useShopingCart } from "@/stores/useStore";
import TrashIconSVG from "../Icons/TrashIconSVG";
import { useState } from "react";

const DeleteAllItemsModal = () => {
  const { emptyTheCart } = useShopingCart();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="group cursor-pointer rounded-full border-2 border-red w-8 h-8 flex items-center justify-center hover:bg-red hover:text-white transition-colors"
        aria-label="Delete All Cart Items"
      >
        <TrashIconSVG classNames="fill-red group-hover:fill-white transition-colors" />
      </DialogTrigger>

      <DialogContent className="bg-white border-0" showCloseButton={false}>
        <DialogHeader className="mb-4">
          <DialogTitle>Delete Cofirmation</DialogTitle>
        </DialogHeader>
        Are You sure you want to remove all items from the cart?
        <DialogFooter className="border-t border-rose-900 pt-4">
          <div className="flex gap-2 items-center justify-end">
            <button
              type="button"
              className="cursor-pointer bg-red text-white rounded-md px-4 py-2"
              onClick={() => {
                emptyTheCart();
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

export default DeleteAllItemsModal;
