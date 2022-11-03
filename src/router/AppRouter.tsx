import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TodosRoutes } from "../todo/routes/TodosRoutes";

export const AppRouter: FC = (): JSX.Element => {
  const status = "not-authenticated";

  return (
    <div className="select-none antialiased bg-gray-100  dark:bg-black transition duration-700"
    style={{WebkitTapHighlightColor:'transparent'}}
    >
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<TodosRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/register" />} />
      </Routes>
    </div>
  );
};
