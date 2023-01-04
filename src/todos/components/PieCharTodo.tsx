import { FC } from "react";

type PieCharTodoProps = { percenComplete: number };

export const PieCharTodo: FC<PieCharTodoProps> = ({
  percenComplete,
}): JSX.Element => {
  return (
    <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-neutral-800 shadow-inner flex justify-center items-center mr-4">
      <p className="text-sm text-teal-500 font-bold ">{percenComplete}%</p>
    </div>
  );
};
