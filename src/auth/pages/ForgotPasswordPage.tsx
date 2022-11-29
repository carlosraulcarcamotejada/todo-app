import { FC } from "react";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LinkPage, SubmitFormButton } from "../components";
import { TextField } from "../../components";

export const ForgotPasswordPage: FC = (): JSX.Element => {
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
    values: { email },
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const enableButton = !isValid || !dirty;

  const links = [
    {
      displayedMessage: "Back to Login",
      path: "/auth/signin",
    },
  ];

  return (
    <LayoutAuth
      titlePage="Recover Password"
      typePage="auth"
      subTitlePage="Enter your email to find your account."
    >
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Email"
          errorText={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="email"
          showError={true}
          touchedTextField={touched.email}
          valueTextField={email}
        />
        <SubmitFormButton displayedMessage="Find" enableButton={enableButton} />
      </form>
      <LinkPage displayedMessagesLinks={links} />
    </LayoutAuth>
  );
};

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});
