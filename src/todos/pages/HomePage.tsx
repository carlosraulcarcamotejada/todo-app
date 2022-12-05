import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { HeaderApp } from "../components";
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
        <div className="ml-6">
          <h2 className="text-2xl mb-1 font-semibold">
            HI! {name || "Carlos Raúl"}
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
      </HeaderApp>
    </LayoutTodos>
  );
};
