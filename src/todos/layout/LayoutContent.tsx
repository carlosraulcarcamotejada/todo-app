import { motion } from "framer-motion";
import { FC } from "react";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutContent: FC<props> = ({ children }): JSX.Element => {
  return (
    <motion.div
      variants={variants}
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }}
      className="mt-4 standalone:mt-6"
    >
      {children}
    </motion.div>
  );
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
