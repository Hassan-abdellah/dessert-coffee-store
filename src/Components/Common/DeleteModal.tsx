import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Fragment,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import RemoveIconSVG from "../Icons/RemoveIconSVG";

const DeleteModal = ({
  modalTitle,
  modalDescription,
  trigger,
  onDelete,
}: {
  modalTitle: string;
  modalDescription: string;
  trigger: (setOpen: Dispatch<SetStateAction<boolean>>) => ReactNode;
  onDelete: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      {/* Render the trigger with click handler */}
      {trigger(setOpen)}

      <Dialog modal={true} open={open} onOpenChange={setOpen}>
        <DialogContent
          className="bg-white border-0 px-0"
          showCloseButton={false}
        >
          <DialogHeader className="px-4 mb-4 pb-4 border-b border-gray-100 flex-row items-center justify-between">
            <DialogTitle>{modalTitle}</DialogTitle>

            <button
              type="button"
              className="group cursor-pointer text-gray-500 transition-colors duration-350 hover:text-gray-700"
              aria-label="Close Modal"
              onClick={() => setOpen(false)}
            >
              <RemoveIconSVG
                classNames="w-4 h-4"
                pathClassNames="fill-gray-500 group-hover:fill-gray-700 transition-colors duration-350"
              />
            </button>
          </DialogHeader>
          <span className="px-4 mb-4">{modalDescription}</span>
          <DialogFooter className="border-t border-gray-100 pt-4 px-4">
            <button
              type="button"
              className="cursor-pointer bg-red text-white rounded-md px-4 py-2 transition-colors duration-350 hover:bg-rose-500"
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="cursor-pointer bg-gray-500 text-white rounded-md px-4 py-2 transition-colors duration-350 hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default DeleteModal;
