import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GetStartedPage } from "../pages/GetStartedPage";
import { SigninPage } from "../pages/SigninPage";
import { LoginPage } from "../pages/LoginPage";

export const AuthRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};
