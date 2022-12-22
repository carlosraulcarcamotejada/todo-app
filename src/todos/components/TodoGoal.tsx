import { FC } from "react";

type props = {
  title: string;
};

export const TodoGoal: FC<props> = ({ title }): JSX.Element => {
  return (
    <div
      onClick={() => {
        console.log("click on list item");
      }}
      className="text-md h-12 flex justify-start items-center text-neutral-900/80 dark:text-neutral-200/80 border-y
       border-neutral-200/80 dark:border-neutral-800 first:border-b-transparent dark:active:bg-neutral-800 active:bg-neutral-300 transition-all duration-150" 
    >
      <p>{title}</p>
    </div>
  );
};
