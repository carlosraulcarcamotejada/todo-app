import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { useUiStore } from "../../hooks";
import { Todo } from "../../store/todos/interfaces";

type props = {
  onClose: (value: boolean) => void;
  children: JSX.Element | JSX.Element[];
};

export const Modal: FC<props> = ({ onClose, children }): JSX.Element => {
  return (
    <Dialog className="fixed inset-0 z-10" onClose={onClose} open={true}>
      <div className="flex flex-col justify-center h-full px-1 pt-4 text-center sm:block sm:p-0">
        <Dialog.Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="fixed inset-0 bg-black/40"
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: 0,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            y: "100%",
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="z-0 flex flex-col w-full h-full bg-neutral-200 dark:bg-neutral-900 rounded-t-3xl shadow-xl"
        >
          <HeaderModal />
          {children}
        </motion.div>
      </div>
    </Dialog>
  );
};

const HeaderModal: FC = (): JSX.Element => {
  return (
    <div className="flex justify-between border-b border-neutral-800 rounded-t-3xl mb-6">
      <ButtonHeader displayOption="Save" />
      <ButtonHeader displayOption="Cancel" />
    </div>
  );
};

const ButtonHeader: FC<{
  displayOption: string;
}> = ({ displayOption }): JSX.Element => {
  const { startToggleModal } = useUiStore();
  return (
    <button
      onClick={() => {
        startToggleModal();
      }}
      type="button"
      className="font-bold text-lg text-teal-500 mx-6 my-4 active:scale-95 transition-all duration-150"
    >
      {displayOption}
    </button>
  );
};
