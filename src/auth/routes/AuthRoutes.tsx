import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GetStartedPage } from "../pages/GetStartedPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SigninPage } from "../pages/SigninPage";

export const AuthRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/getstarted" element={<GetStartedPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/*" element={<Navigate to="/auth/getstarted" />} />
    </Routes>
  );
};
