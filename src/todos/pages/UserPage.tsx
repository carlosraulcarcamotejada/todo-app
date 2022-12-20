import { FC } from "react";
import { useTodosStore, useAuthStore } from "../../hooks";
import { LayoutContent } from "../layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UpdateUserValues } from "../interfaces";
import { SubmitFormButton } from "../../auth/components";
import { TextField } from "../../components";
import { User } from "../../auth/interfaces";

export const UserPage: FC = (): JSX.Element => {
  const { user, startLogout, startUpdatingUser } = useAuthStore();
  const { startTodosLogout } = useTodosStore();

  const onSubmit = (values: User) => {
    console.log(values);
    startUpdatingUser(values)
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    dirty,
    touched,
    errors,
    values: { email, surname, name },
  } = useFormik<User>({
    initialValues: { ...user },
    validationSchema,
    onSubmit,
  });

  const isValidForm = !isValid || !dirty;

  return (
    <LayoutContent>
      <h1 className="text-neutral-800/80 dark:text-white text-center my-2 font-semibold text-lg">
        Edit User
      </h1>

      <form onSubmit={handleSubmit}>
        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="name"
          placeholder="Name"
          touchedTextField={touched.name}
          valueTextField={name}
          errorText={errors.name}
          showError={true}
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="surname"
          placeholder="Surname"
          touchedTextField={touched.surname}
          valueTextField={surname}
          errorText={errors.surname}
          showError={true}
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          nameTextField="email"
          placeholder="Email"
          touchedTextField={touched.email}
          valueTextField={email}
          errorText={errors.email}
          showError={true}
        />

        <SubmitFormButton
          displayedMessage={"Update User"}
          isValidForm={isValidForm}
        />
      </form>

      <button
        onClick={() => {
          startLogout();
          startTodosLogout();
        }}
        className="w-full bg-rose-500/30 h-10 font-semibold text-red-500 "
        type="button"
      >
        Sign out
      </button>
    </LayoutContent>
  );
};

type InputType = {
  type?: "text" | "password" | "email";
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
};

const initialValues: User = {
  _id: 0,
  name: "",
  surname: "",
  email: "",
  userImg: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(40).required(),
  surname: Yup.string().min(3).max(40).required(),
  email: Yup.string().email().required(),
});
