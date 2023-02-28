import { FC } from "react";
import { useAuthStore, useTodosStore } from "../../hooks";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const HomeHeader: FC = (): JSX.Element => {
  const { pendingTodos } = useTodosStore();
  const {
    user: { name, surname, userImg },
  } = useAuthStore();

  return (
    <div className="flex items-center justify-between pt-10 standalone:pt-14">
      <div className="ml-4">
        <h2 className="text-2xl mb-1 font-semibold">
          HI! {`${name.split(" ")[0]}  ${surname.split(" ")[0]}`}
        </h2>
        <p className="text-md ">
          There {pendingTodos > 1 ? "are" : "is"} {pendingTodos}{" "}
          {pendingTodos > 1 ? "things" : "thing"} to do...{" "}
        </p>
      </div>
      <div
        className="flex mr-2 justify-end active:scale-95 transition-all duration-100"
        onClick={() => {
          console.log("avatar clicked");
        }}
      >
        {userImg ? (
          <img
            className="rounded-full w-14 h-14 border-2 border-neutral-300 shadow-sm"
            src={userImg}
            alt=""
          />
        ) : (
          <UserCircleIcon className="rounded-full w-14 h-14 text-neutral-300  " />
        )}
      </div>
    </div>
  );
};
