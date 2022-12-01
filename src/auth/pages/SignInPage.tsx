import { FC } from "react";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LinkPage, SubmitFormButton } from "../components";
import { TextField } from "../../components";
import { useAuthStore } from "../../hooks/useAuthStore";
import { SignInValues } from "../types";

export const SignInPage: FC = (): JSX.Element => {
  const { startSignIn, errorMessage, status, user } = useAuthStore();

  const onSubmit = async (SignInValues: SignInValues) => {
    //console.log(formValues);
    await startSignIn(SignInValues);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    dirty,
    touched,
    values: { email_user, password },
  } = useFormik<SignInValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isValidForm = !isValid || !dirty;

  return (
    <LayoutAuth typePage="auth" titlePage="Sign In">
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Email or User"
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="email_user"
          touchedTextField={touched.email_user}
          valueTextField={email_user}
        />

        <TextField
          placeholder="Password"
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="password"
          touchedTextField={touched.password}
          valueTextField={password}
          typeField="password"
        />

        <SubmitFormButton
          displayedMessage="Sign In"
          isValidForm={isValidForm}
        />
      </form>
      <LinkPage displayedMessagesLinks={links} />
    </LayoutAuth>
  );
};

const initialValues: SignInValues = {
  email_user: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email_user: Yup.string().required(),
  password: Yup.string().required(),
});

const links = [
  {
    displayedMessage: "Don't you have an account? Sign Up",
    path: "/auth/signup",
  },
  { displayedMessage: "Forgot password?", path: "/auth/forgotpassword" },
];
