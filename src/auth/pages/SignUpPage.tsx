import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LayoutAuth } from "../layout/LayoutAuth";
import { TextField } from "../../components/TextField/TextField";
import { SubmitFormButton } from "../../components/SubmitFormButton";
import { LinkPage } from "../../components/LinkPage";

export const SignUpPage: FC = (): JSX.Element => {
  const onSubmit = (formValues: typeof initialValues) => {
    console.log(formValues);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    dirty,
    touched,
    errors,
    values: { email, surname, name, password, user, confirmPassword },
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const enableButton = !isValid || !dirty;

  const links = [
    {
      displayedMessage: "Already have an account? Sign in",
      path: "/auth/signin",
    },
  ];

  return (
    <LayoutAuth typePage="auth" titlePage={"Your Profile"}>
      <form onSubmit={handleSubmit}>
        <TextField
          displayNameTextField="User"
          errorTextField={errors.user}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="user"
          showError={true}
          touchedTextField={touched.user}
          valueTextField={user}
          typeField="text"
        />

        <TextField
          displayNameTextField="Name"
          errorTextField={errors.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="name"
          showError={true}
          touchedTextField={touched.name}
          valueTextField={name}
          typeField="text"
        />

        <TextField
          displayNameTextField="Surname"
          errorTextField={errors.surname}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="surname"
          showError={true}
          touchedTextField={touched.surname}
          valueTextField={surname}
          typeField="text"
        />

        <TextField
          displayNameTextField="Email"
          errorTextField={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="email"
          showError={true}
          touchedTextField={touched.email}
          valueTextField={email}
          typeField="text"
        />

        <TextField
          displayNameTextField="Password"
          errorTextField={errors.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="password"
          showError={true}
          touchedTextField={touched.password}
          valueTextField={password}
          typeField="password"
        />

        <TextField
          displayNameTextField="Confirm Password"
          errorTextField={errors.confirmPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="confirmPassword"
          showError={true}
          touchedTextField={touched.confirmPassword}
          valueTextField={confirmPassword}
          typeField="password"
        />

        <SubmitFormButton
          displayedMessage="Sign Up"
          enableButton={enableButton}
        />
      </form>
      <LinkPage displayedMessagesLinks={links} />
    </LayoutAuth>
  );
};

const initialValues = {
  user: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  user: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(60, "Maximum 20 characters")
    .required("User is required"),
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
    .required("Name is required"),
  surname: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
    .required("Surname is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Mail is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(12, "Maximum 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirmation password is required")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});
