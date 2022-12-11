import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { TodoGoal } from "../../store/todos/types";
import { HeaderApp, TodoCard } from "../components";
import { LayoutTodos } from "../layout/LayoutTodos";

export const HomePage: FC = (): JSX.Element => {
  const { user: User } = useAuthStore();
  const { name } = User;
  const things = 3;
  const userUrlImage =
    "https://yt3.ggpht.com/ytc/AMLnZu-fRDgqki18U5Qd9mEzIUW_1JnPLbXE7hJ5WjEpnw=s108-c-k-c0x00ffffff-no-rj";




  return (
    <LayoutTodos>
      <HeaderApp>
        <div className="flex items-center justify-start pt-8">
          <div className="ml-6">
            <h2 className="text-2xl mb-1 font-semibold">
              HI! {name || "John Doe"}
            </h2>
            <p className="text-md">There are {things} important things... </p>
          </div>
          <div className="ml-12 flex justify-end items-end">
            <img
              className="rounded-full w-14 h-14 border-2 border-neutral-300"
              src={userUrlImage}
              alt="userUrlImage"
            />
          </div>
        </div>
      </HeaderApp>

      <div className="w-full h-24 relative">
        <TodoCard todoTitle="Terminar la mesa" todoGoals={todosGoal} />
      </div>
    </LayoutTodos>
  );
};

const todosGoal:TodoGoal[] = 
[
    {
      _id_todoGoal: "1",
      title: "Lijar mesa",
      deadline: 383648276,
      done: false,
    },
    {
      _id_todoGoal: "2",
      title: "Pintar mesa",
      deadline: 38432898,
      done: false,
    },
    {
      _id_todoGoal: "3",
      title: "Barnizar mesa",
      deadline: 904930954,
      done: false,
    },
  ]

