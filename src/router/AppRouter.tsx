import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { GetStartedPage } from "../auth/pages/GetStartedPage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { TodosRoutes } from "../todos/routes/TodosRoutes";

export const AppRouter: FC = (): JSX.Element => {
  const {status} = useAuthStore();

  return (
    <Routes>
      {status === "authenticated" ? (
          <Route path="/*" element={<TodosRoutes />} />
        ) : (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<GetStartedPage />} />
          </>
        )}
        {/* <Route path="/*" element={<Navigate to="/get" />} />  */}
    </Routes>
  );
};
