import { FC } from "react";
import { Spinner } from "../../components";
import { useTodosStore } from "../../hooks";

export const HeaderModal: FC<{
  functionToCloseModal: Function;
  functionToDoneOption?: Function;
  onCancel: string;
  onDone: String;
  title: string;
}> = ({
  functionToCloseModal,
  functionToDoneOption,
  onCancel,
  onDone,
  title,
}): JSX.Element => {
  const { isAddingTodo } = useTodosStore();

  return (
    <div className="sticky z-20 top-0 right-0 h-16 w-full bg-neutral-50 dark:bg-neutral-900">
      <div
        className="flex justify-between items-center border-b border-neutral-200
       dark:border-neutral-800 rounded-t-3xl h-16 w-full"
      >
        <button
          onClick={() => {
            if (functionToCloseModal !== undefined) {
              functionToCloseModal(false);
            }
          }}
          type={`button`}
          className="font-light ring-transparent text-xl text-teal-500 mx-6 
          my-4 active:scale-95 transition-all duration-150 focus:outline-none"
        >
          {onCancel}
        </button>

        <span className="dark:text-neutral-300 font-semibold text-lg">
          {title}
        </span>

        {isAddingTodo ? (
          <div className="mx-6 my-4">
            <Spinner size={28} />
          </div>
        ) : (
          <button
            type="submit"
            className="font-bold ring-transparent text-xl text-teal-500 mx-6 
            my-4 active:scale-95 transition-all duration-150 focus:outline-none"
            onClick={() => {
              if (functionToDoneOption != undefined) {
                functionToDoneOption();
              }
            }}
          >
            {onDone}
          </button>
        )}
      </div>
    </div>
  );
};
