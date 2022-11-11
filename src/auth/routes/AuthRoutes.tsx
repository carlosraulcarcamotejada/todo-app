import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { GetStartedPage } from "../pages/GetStartedPage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";

export const AuthRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};
