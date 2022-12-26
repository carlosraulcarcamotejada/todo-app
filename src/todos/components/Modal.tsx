import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { useUiStore } from "../../hooks";

export const Modal: FC = (): JSX.Element => {
  const { startToggleModal, isOpenModal } = useUiStore();

  return (
    <Dialog
      className="fixed inset-0 z-10"
      onClose={startToggleModal}
      open={true}
    >
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
          className="z-0 flex flex-col w-full h-full bg-neutral-50 dark:bg-neutral-900 rounded-t-3xl shadow-xl"
        >
          <HeaderModal />
          <AddTodoScreen />
        </motion.div>
      </div>
    </Dialog>
  );
};

const HeaderModal: FC = (): JSX.Element => {
  return (
    <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 rounded-t-3xl mb-6">
      <ButtonHeader displayOption="Cancel" />
      <ButtonHeader displayOption="Save" />
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
      className="last:font-bold font-semibold ring-transparent text-xl text-teal-500 mx-6 my-4 active:scale-95 transition-all duration-150"
    >
      {displayOption}
    </button>
  );
};

const AddTodoScreen: FC = (): JSX.Element => {
  return (
    <>
      <h3 className="dark:text-neutral-300">Add todo screen</h3>
    </>
  );
};
