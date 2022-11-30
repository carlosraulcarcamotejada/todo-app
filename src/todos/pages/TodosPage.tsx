import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";

export const TodosPage: FC = (): JSX.Element => {


  const {user} = useAuthStore();


  return (
    <div className="min-h-screen">
      <h1 className="text-white">Welcome Back { user.user} </h1>
    </div>
  );
};
