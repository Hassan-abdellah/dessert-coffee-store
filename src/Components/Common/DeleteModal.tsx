import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";

import {
  Fragment,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

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

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-white border-0 px-0">
          <AlertDialogHeader className="flex flex-col sm:group-data-[size=default]/alert-dialog-content:place-items-center">
            <AlertDialogMedia className="bg-red-200 w-10 h-10">
              <Trash2Icon className="text-red w-7 h-7" />
            </AlertDialogMedia>

            <AlertDialogTitle className="text-center">
              {modalTitle}
            </AlertDialogTitle>
            <AlertDialogDescription>{modalDescription}</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="border-t border-gray-100 pt-4 px-4">
            <AlertDialogAction
              className="cursor-pointer bg-red text-white rounded-md px-4 py-2 transition-colors duration-350 hover:bg-rose-500"
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
            >
              Delete
            </AlertDialogAction>

            <AlertDialogCancel
              className="cursor-pointer bg-gray-500 text-white rounded-md px-4 py-2 transition-colors duration-350 hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Fragment>
  );
};

export default DeleteModal;
