import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpPage, ForgotPasswordPage, SignInPage } from "../pages";

export const AuthRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/*" element={<Navigate to="/signin" />} />
    </Routes>
  );
};
