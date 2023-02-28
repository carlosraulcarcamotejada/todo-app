import { FC } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";



type props = {
  setIsOpenModal: Function | undefined;
  ScreenModal: JSX.Element | JSX.Element[];
};

export const Modal: FC<props> = ({
  setIsOpenModal,
  ScreenModal,
}): JSX.Element => {
  //const { startToggleModal } = useUiStore();

  return (
    <Dialog
      className={`fixed  z-10 inset-0`}
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
          className="z-20 flex flex-col w-full h-full bg-neutral-50 
           dark:bg-neutral-900 rounded-t-3xl shadow-xl overflow-y-auto"
        >
          {ScreenModal}
        </motion.div>
      </div>
    </Dialog>
  );
};
