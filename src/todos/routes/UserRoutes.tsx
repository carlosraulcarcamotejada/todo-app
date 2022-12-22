import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Page2, UserPage, HomePage } from "../pages";

export const UserRoutes: FC = (): JSX.Element => {
  return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/userpage" />} />
      </Routes>
  );
};
