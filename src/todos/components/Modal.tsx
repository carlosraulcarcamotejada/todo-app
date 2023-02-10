import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FC } from "react";

type props = {
  setIsOpenModal: (isOpenModal: boolean) => void;
  optionModal?: boolean;
};

export const Modal: FC<props> = ({
  setIsOpenModal,
  optionModal = false,
}): JSX.Element => {
  //const { startToggleModal } = useUiStore();

  return (
    <Dialog
      className="fixed inset-0 z-10"
      onClose={() => {
        setIsOpenModal(false);
      }}
      open={true}
    >
      <div className="flex flex-col justify-center h-full pt-10 text-center sm:block sm:p-0">
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
          { !optionModal &&  <HeaderModal setIsOpenModal={setIsOpenModal} /> }
         
          {/* <AddTodoScreen /> */}
        </motion.div>
      </div>
    </Dialog>
  );
};

const HeaderModal: FC<{ setIsOpenModal: (isOpenModal: boolean) => void }> = ({
  setIsOpenModal,
}): JSX.Element => {
  return (
    <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 rounded-t-3xl">
      <ButtonHeader setIsOpenModal={setIsOpenModal} displayOption="Cancel" />
      <span className="dark:text-neutral-300 font-semibold text-lg">
        Add To-Do
      </span>
      <ButtonHeader displayOption="Save" />
    </div>
  );
};

const ButtonHeader: FC<{
  displayOption: string;
  setIsOpenModal?: (isOpenModal: boolean) => void;
}> = ({ displayOption, setIsOpenModal }): JSX.Element => {
  return (
    <button
      onClick={() => {
        if (displayOption === "Cancel" && setIsOpenModal !== undefined) {
          setIsOpenModal(false);
        }
      }}
      type="button"
      className="last:font-semibold font-medium ring-transparent text-xl text-teal-500 mx-6 my-4 active:scale-95 transition-all duration-150"
    >
      {displayOption}
    </button>
  );
};


