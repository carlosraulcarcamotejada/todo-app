import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FC } from "react";

type props = {
  setIsOpenModal: Function | undefined;
  ScreenMenu: JSX.Element | JSX.Element[];
};

export const Modal: FC<props> = ({
  setIsOpenModal,
  ScreenMenu,
}): JSX.Element => {
  //const { startToggleModal } = useUiStore();

  return (
    <Dialog
      className={`fixed  z-10  inset-0`}
      onClose={() => {
        if (setIsOpenModal !== undefined) {
          setIsOpenModal(false);
        }
      }}
      open={true}
    >
      <div
        className={`sm:block sm:p-0 flex flex-col justify-center h-full pt-10`}
      >
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
            y: "0%",
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            y: "100%",
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="z-0 flex flex-col w-full h-full bg-neutral-50 dark:bg-neutral-900 rounded-t-3xl shadow-xl"
        >
          {ScreenMenu}
        </motion.div>
      </div>
    </Dialog>
  );
};

export const HeaderModal: FC<{
  onCancel: string;
  onDone: String;
  title: string;
  functionToCloseModal: Function;
}> = ({ functionToCloseModal, title, onCancel, onDone }): JSX.Element => {
  return (
    <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 rounded-t-3xl">
      <button
        onClick={() => {
          if (functionToCloseModal !== undefined) {
            functionToCloseModal(false);
          }
        }}
        type={`button`}
        className="font-medium ring-transparent text-xl text-teal-500 mx-6 
        my-4 active:scale-95 transition-all duration-150 focus:outline-none"
      >
        {onCancel}
      </button>

      <span className="dark:text-neutral-300 font-semibold text-lg">
        {title}
      </span>

      <button
        type="submit"
        className="font-semibold ring-transparent text-xl text-teal-500 mx-6 
        my-4 active:scale-95 transition-all duration-150 focus:outline-none"
      >
        {onDone}
      </button>
    </div>
  );
};
