import { useShopingCart } from "@/stores/useStore";
import TrashIconSVG from "../Icons/TrashIconSVG";
import DeleteModal from "../Common/DeleteModal";

const DeleteAllItemsModal = () => {
  const { emptyTheCart } = useShopingCart();
  return (
    <DeleteModal
      modalTitle="Delete Cofirmation"
      modalDescription="Are You sure you want to remove all items from the cart?"
      trigger={(setOpen) => (
        <button
          type="button"
          className="group cursor-pointer rounded-full border-2 border-red w-8 h-8 flex items-center justify-center hover:bg-red hover:text-white transition-colors"
          aria-label="Delete All Cart Items"
          onClick={() => setOpen(true)}
        >
          <TrashIconSVG classNames="fill-red group-hover:fill-white transition-colors" />
        </button>
      )}
      onDelete={() => emptyTheCart()}
    />
  );
};

export default DeleteAllItemsModal;
