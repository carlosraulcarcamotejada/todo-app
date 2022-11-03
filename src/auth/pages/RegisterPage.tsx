import { FC, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

export const RegisterPage: FC = (): JSX.Element => {
  const [isActiveForm, setIsActiveForm] = useState<boolean>(true);

  const initialValues = {
    user: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .min(3, "Minimum 3 characters.")
      .max(60, "Maximum 20 characters.")
      .required("User is required."),
    name: Yup.string()
      .min(3, "Minimum 3 characters.")
      .max(40, "Maximum 40 characters.")
      .required("Name is required."),
    lastname: Yup.string()
      .min(3, "Minimum 3 characters.")
      .max(40, "Maximum 40 characters.")
      .required("Lastname is required."),
    email: Yup.string()
      .email("Must be a valid email.")
      .required("Mail is required."),
    password: Yup.string()
      .min(6, "Minimum 6 characters.")
      .max(12, "Maximum 12 characters.")
      .required("Password is required."),

    confirmPassword: Yup.string()
      .required("Confirmation password is required.")
      .oneOf([Yup.ref("password"), null], "Passwords do not match."),
  });

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
    values: { email, lastname, name, password, user, confirmPassword },
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col justify-center items-center bg-inherit ">
      {/* Hero section */}
      <div
        className={`flex w-full flex-col justify-evenly items-center absolute top-0 min-h-full bg-inherit ${
          !isActiveForm ? "block" : "hidden"
        }`}
      >
        <img className="w-72" src="/person-working.png" alt="person-working" />
        <div>
          <h3 className="text-2xl text-center font-semibold text-gray-600 dark:text-gray-300">
            TODO's App
          </h3>
          <p className="text-gray-400 font-semibold text-md dark:text-gray-500">
            Let this app help you organize your tasks.
          </p>
        </div>

        <button
          className=" bg-emerald-500 w-56 py-4 px-6 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-emerald-600 
           active:bg-emerald-600 active:scale-95  mb-24"
          onClick={() => setIsActiveForm(true)}
        >
          GET STARTED
        </button>
      </div>

      {/* Register form */}
      <div
        className={`absolute top-0 pb-32 bg-white border  rounded-xl w-80 md:w-96 flex flex-col items-center justify-center mt-6 ${
          isActiveForm ? "block" : "hidden"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl mt-6 mb-4 text-center text-gray-500 font-semibold">
            Your Profile
          </h3>
          <div className="">
            <input
              className={`${
                errors.user && touched.user ? "border border-rose-400" : ""
              }`}
              placeholder="User"
              type="text"
              name="user"
              value={user}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.user && touched.user && (
              <p className="ml-1 text-rose-400 text-sm">{errors.user}</p>
            )}
          </div>

          <div className="">
            <input
              className={`${
                errors.name && touched.name ? "border border-rose-400" : ""
              }`}
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="ml-1 text-rose-400 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="">
            <input
              className={`${
                errors.lastname && touched.lastname
                  ? "border border-rose-400"
                  : ""
              }`}
              placeholder="Lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname && (
              <p className="ml-1 text-rose-400 text-sm">{errors.lastname}</p>
            )}
          </div>
          <div className="">
            <input
              className={`${
                errors.email && touched.email ? "border border-rose-400" : ""
              }`}
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="ml-1 text-rose-400 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="">
            <input
              className={`${
                errors.password && touched.password
                  ? "border border-rose-400"
                  : ""
              }`}
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="ml-1 text-rose-400 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="">
            <input
              className={`${
                errors.confirmPassword && touched.confirmPassword
                  ? "border border-rose-400"
                  : ""
              }`}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="ml-1 text-rose-400 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            onClick={() => console.log("Submitting")}
            disabled={!isValid || !dirty}
            className="rounded-md text-lg bg-emerald-500 w-full mt-4 py-2 px-6 text-white shadow-md hover:shadow-lg font-semibold hover:bg-emerald-600
             active:bg-emerald-600 active:scale-95 disabled:bg-emerald-500/40 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/90"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>

      <div className="w-full px-2 py-4 font-normal bg-violet-400  absolute bottom-0">
        <p className="text-center dark:text-gray-600 text-gray-400">
          Copyright &copy; Carlos Cárcamo &#183; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
