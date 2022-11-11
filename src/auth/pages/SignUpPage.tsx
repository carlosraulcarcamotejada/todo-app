import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LayoutAuth } from "../layout/LayoutAuth";
import { Link } from "react-router-dom";
import { PasswordField } from "../../common-components/PasswordField";
import { TextField } from "../../common-components/TextField";

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

  return (
    <LayoutAuth typePage="auth" titlePage={"Your Profile"}>
      <form onSubmit={handleSubmit}>
        <div className="pb-7 h-20 relative">
          <TextField
            displayNameTextField="User"
            errorTextField={errors.user}
            handleBlur={handleBlur}
            handleChange={handleChange}
            nameTextField="user"
            showError={true}
            touchedTextField={touched.user}
            valueTextField={user}
          />
        </div>

        <div className="pb-7 h-20 relative">
          <TextField
            displayNameTextField="Name"
            errorTextField={errors.name}
            handleBlur={handleBlur}
            handleChange={handleChange}
            nameTextField="name"
            showError={true}
            touchedTextField={touched.name}
            valueTextField={name}
          />
        </div>
        <div className="pb-7 h-20 relative">
          <TextField
            displayNameTextField="Surname"
            errorTextField={errors.surname}
            handleBlur={handleBlur}
            handleChange={handleChange}
            nameTextField="surname"
            showError={true}
            touchedTextField={touched.surname}
            valueTextField={surname}
          />
        </div>
        <div className="pb-7 h-20 relative">
          <TextField
            displayNameTextField="Email"
            errorTextField={errors.email}
            handleBlur={handleBlur}
            handleChange={handleChange}
            nameTextField="email"
            showError={true}
            touchedTextField={touched.email}
            valueTextField={email}
          />
        </div>
        <div className="pb-7 h-20 relative">
          <PasswordField
            valuePasswordField={password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            namePasswordField="password"
            showError={true}
            errorPasswordField={errors.password}
            touchedPasswordField={touched.password}
            displayNamePasswordField="Password"
          />
        </div>
        <div className="pb-7 h-20 relative ">
          <PasswordField
            valuePasswordField={confirmPassword}
            handleBlur={handleBlur}
            handleChange={handleChange}
            namePasswordField="confirmPassword"
            showError={true}
            errorPasswordField={errors.confirmPassword}
            touchedPasswordField={touched.confirmPassword}
            displayNamePasswordField="Confirm Password"
          />
        </div>

        <div>
          <button
            disabled={!isValid || !dirty}
            className="btn-form"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <Link className="link-form" to="/auth/signin">
            Already have an account? Sign in
          </Link>
        </div>
      </form>
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
