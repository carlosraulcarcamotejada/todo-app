import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components";
import { LayoutTodos } from "../layout/LayoutTodos";
import { Page2, Page3, Page4, HomePage } from "../pages";

export const TodosRoutes: FC = (): JSX.Element => {
  return (
    <LayoutTodos>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Navbar />
    </LayoutTodos>
  );
};
