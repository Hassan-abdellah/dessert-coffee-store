import { useShopingCart } from "@/stores/useStore";
import DeleteModal from "../Common/DeleteModal";
import RemoveIconSVG from "../Icons/RemoveIconSVG";

const DeleteCartItemModal = ({ productName }: { productName: string }) => {
  const { deleteCartItem } = useShopingCart();
  return (
    <DeleteModal
      modalTitle="Delete Cofirmation"
      modalDescription="Are You sure you want to delete this item from the cart?"
      trigger={(setOpen) => (
        <button
          type="button"
          className="group cursor-pointer border-2 border-rose-300 h-5 w-5 rounded-full flex items-center justify-center transition-colors duration-350 hover:bg-rose-300"
          aria-label="remove item from cart"
          onClick={() => setOpen(true)}
        >
          <RemoveIconSVG
            classNames="w-2 h-2"
            pathClassNames="fill-rose-300 group-hover:fill-white transition-colors duration-350"
          />
        </button>
      )}
      onDelete={() => deleteCartItem(productName)}
    />
  );
};

export default DeleteCartItemModal;
