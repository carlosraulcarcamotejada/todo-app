import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LayoutAuth } from "../layout/LayoutAuth";
import { LinkPage, SubmitFormButton } from "../components";
import { TextField } from "../../components";
import { useAuthStore } from "../../hooks/useAuthStore";
import { SignUpValues } from "../interfaces";

export const SignUpPage: FC = (): JSX.Element => {
  const { startSignUp } = useAuthStore();

  const onSubmit = (formValues: SignUpValues) => {
    startSignUp(formValues);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    dirty,
    touched,
    errors,
    values: { email, surname, name, password, confirmPassword },
  } = useFormik<SignUpValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isValidForm = !isValid || !dirty;

  const links = [
    {
      displayedMessage: "Already have an account? Sign in",
      path: "/auth/signin",
    },
  ];

  return (
    <LayoutAuth typePage="auth" titlePage="Sign Up">
      <form onSubmit={handleSubmit}>
        <TextField
          errorText={errors.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="name"
          placeholder="Name"
          showError
          touchedTextField={touched.name}
          valueTextField={name}
        />

        <TextField
          errorText={errors.surname}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="surname"
          placeholder="Surname"
          showError
          touchedTextField={touched.surname}
          valueTextField={surname}
        />

        <TextField
          errorText={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="email"
          placeholder="Email"
          showError
          touchedTextField={touched.email}
          valueTextField={email}
        />

        <TextField
          errorText={errors.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="password"
          placeholder="Password"
          showError
          touchedTextField={touched.password}
          typeField="password"
          valueTextField={password}
        />

        <TextField
          errorText={errors.confirmPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="confirmPassword"
          placeholder="Confirm Password"
          showError
          touchedTextField={touched.confirmPassword}
          typeField="password"
          valueTextField={confirmPassword}
        />

        <SubmitFormButton
          displayedMessage="Sign Up"
          isValidForm={isValidForm}
        />
      </form>
      <LinkPage displayedMessagesLinks={links} />
    </LayoutAuth>
  );
};

const initialValues: SignUpValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(40).required(),
  surname: Yup.string().min(3).max(40).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "passwords does not match"),
});

