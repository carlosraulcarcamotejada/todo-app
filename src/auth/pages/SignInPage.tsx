import { FC } from "react";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LinkPage, SubmitFormButton } from "../components";
import { TextField } from "../../components";

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

  const enableButton = !isValid || !dirty;

  const links = [
    {
      displayedMessage: "Don't you have an account? Sign Up",
      path: "/auth/signup",
    },
    { displayedMessage: "Forgot password?", path: "/auth/forgotpassword" },
  ];

  
  return (
    <LayoutAuth typePage="auth" titlePage="Sign In">
      <form onSubmit={handleSubmit}>
        <TextField
          displayNameTextField="Email or User"
          errorTextField={errors.emailUser}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="emailUser"
          touchedTextField={touched.emailUser}
          valueTextField={emailUser}
        />

        <TextField
          displayNameTextField="Password"
          errorTextField={errors.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="password"
          touchedTextField={touched.password}
          valueTextField={password}
          typeField="password"
        />

        <SubmitFormButton
          displayedMessage="Sign In"
          enableButton={enableButton}
        />
      </form>
      <LinkPage displayedMessagesLinks={links} />
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

