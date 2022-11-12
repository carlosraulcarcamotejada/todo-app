import { FC } from "react";
import { Link } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PasswordField } from "../../common-components/PasswordField";
import { TextField } from "../../common-components/TextField";

export const SignInPage: FC = (): JSX.Element => {
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
    values: { emailUser, password },
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <LayoutAuth typePage="auth" titlePage="Sign In">
      <form onSubmit={handleSubmit}>
        <div className="pb-7 h-20 relative">
          <TextField
            displayNameTextField="Email or User"
            errorTextField={errors.emailUser}
            handleBlur={handleBlur}
            handleChange={handleChange}
            nameTextField="emailUser"
            showError={false}
            touchedTextField={touched.emailUser}
            valueTextField={emailUser}
          />
        </div>

        <div className="pb-7 h-20 relative">
          <PasswordField
            valuePasswordField={password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            namePasswordField="password"
            showError={false}
            errorPasswordField={errors.password}
            touchedPasswordField={touched.password}
            displayNamePasswordField="Password"
          />
        </div>

        <div>
          <button
            disabled={!isValid || !dirty}
            className="btn-form"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-col justify-center items-center">
        <Link className="link-form" to="/auth/signup">
          Don't you have an account? Sign Up
        </Link>
        <Link className="link-form" to="/auth/forgotpassword">
          Forgot password?
        </Link>
      </div>
    </LayoutAuth>
  );
};

const initialValues = {
  emailUser: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  emailUser: Yup.string().required(),
  password: Yup.string().required(),
});
