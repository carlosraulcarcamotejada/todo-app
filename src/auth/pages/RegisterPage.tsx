import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LayoutAuth } from "../layout/LayoutAuth";
import { Link } from "react-router-dom";
import { UserCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

export const RegisterPage: FC = (): JSX.Element => {
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


  const [revealPassword, setRevealPassword] = useState<'text' | 'password'>('password');
  const [revealConfirmPassword, setRevealConfirmPassword] = useState<'text' | 'password'>('password');


  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === 'password' ? 'text' : 'password');
  }
  

  const toggleRevealConfirmPassword = () => {
    setRevealConfirmPassword(revealConfirmPassword === 'password' ? 'text' : 'password');
  }


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
    <LayoutAuth>
      <div className="pb-10 mb-1 border bg-white rounded-xl w-80 md:w-96 flex flex-col items-center justify-center mt-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col mb-4">
            <UserCircleIcon className="h-16 w-16 text-gray-600 mt-4 mb-2 text-center  " />
            <h3 className="text-gray-600 text-lg font-semibold">Your Profile</h3>
          </div>
          <div className="pb-5">
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
              <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
                {errors.user}
              </p>
            )}
          </div>

          <div className="pb-5">
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
              <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
                {errors.name}
              </p>
            )}
          </div>
          <div className="pb-5">
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
              <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
                {errors.lastname}
              </p>
            )}
          </div>
          <div className="pb-5">
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
              <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
                {errors.email}
              </p>
            )}
          </div>
          <div className="pb-5 relative">
            <input
              className={`${
                errors.password && touched.password
                  ? "border border-rose-400"
                  : ""
              }`}
              placeholder="Password"
              type={revealPassword}
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className={`h-10 w-10 px-2 text-gray-500 absolute right-1 top-1 rounded-md ${password.length===0?'hidden':''}`} onClick={toggleRevealPassword}>
              {revealPassword === 'password'?<EyeIcon />: <EyeSlashIcon />}
            </button>
            {errors.password && touched.password && (
              <p className="ml-1 -mb-6 pb-1 text-rose-400 text-sm">
                {errors.password}
              </p>
            )}
          </div>
          <div className="pb-5 relative">
            <input
              className={`${
                errors.confirmPassword && touched.confirmPassword
                  ? "border border-rose-400"
                  : ""
              }`}
              placeholder="Confirm Password"
              type={revealConfirmPassword}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className={`h-10 w-10 px-2 text-gray-500 absolute right-1 top-1 rounded-md ${confirmPassword.length===0?'hidden':''}`} onClick={toggleRevealConfirmPassword}>
              {revealConfirmPassword === 'password'?<EyeIcon />: <EyeSlashIcon />}
            </button>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            onClick={() => console.log("Submitting")}
            disabled={!isValid || !dirty}
            className="rounded-md text-lg bg-green-leaf w-full mt-4 py-2 px-6 text-white shadow-md hover:shadow-lg font-semibold hover:bg-emerald-600
            active:bg-emerald-600 active:scale-95 disabled:bg-emerald-500/40 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/90"
            type="submit"
          >
            Sign in
          </button>
          <div className="mt-6">
            <Link className="text-md font-normal text-blue-600" to="/auth/signin">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </LayoutAuth>
  );
};
