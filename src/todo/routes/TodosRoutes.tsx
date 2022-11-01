import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TodosPage } from "../pages/TodosPage";

export const TodosRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
