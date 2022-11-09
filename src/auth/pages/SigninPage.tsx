import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LayoutAuth } from "../layout/LayoutAuth";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export const SigninPage: FC = (): JSX.Element => {
  const onSubmit = (formValues: typeof initialValues) => {
    console.log(formValues);
  };

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );
  const [revealConfirmPassword, setRevealConfirmPassword] = useState<
    "text" | "password"
  >("password");

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  const toggleRevealConfirmPassword = () => {
    setRevealConfirmPassword(
      revealConfirmPassword === "password" ? "text" : "password"
    );
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
    <LayoutAuth typePage="auth" titlePage="Your Profile">
      <form onSubmit={handleSubmit}>
        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.user && touched.user
                ? "border border-rose-400 focus:border-2  focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="User"
            type="text"
            name="user"
            required
            value={user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.user && touched.user
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="user"
          >
            User
          </label>
          {errors.user && touched.user && (
            <p className="ml-1 h-5 text-rose-400 text-sm">{errors.user}</p>
          )}
        </div>

        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.name && touched.name
                ? "border border-rose-400 focus:border-2 focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.name && touched.name
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="name"
          >
            Name
          </label>
          {errors.name && touched.name && (
            <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
              {errors.name}
            </p>
          )}
        </div>
        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.surname && touched.surname
                ? "border border-rose-400 focus:border-2 focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="Surname"
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.surname && touched.surname
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="surname"
          >
            Surname
          </label>
          {errors.surname && touched.surname && (
            <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
              {errors.surname}
            </p>
          )}
        </div>
        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.email && touched.email
                ? "border border-rose-400 focus:border-2 focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.email && touched.email
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="email"
          >
            Email
          </label>
          {errors.email && touched.email && (
            <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
              {errors.email}
            </p>
          )}
        </div>
        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.password && touched.password
                ? "border border-rose-400 focus:border-2 focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="Password"
            type={revealPassword}
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={`h-11 w-11 p-3 text-gray-500 absolute right-1 top-1 rounded-md ${
              password.length === 0 ? "hidden" : ""
            }`}
            onClick={toggleRevealPassword}
          >
            {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
          </div>
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.password && touched.password
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="password"
          >
            Password
          </label>
          {errors.password && touched.password && (
            <p className="ml-1 -mb-6 pb-1 text-rose-400 text-sm">
              {errors.password}
            </p>
          )}
        </div>
        <div className="pb-7 h-20 relative ">
          <input
            className={`peer placeholder-transparent h-11 ${
              errors.confirmPassword && touched.confirmPassword
                ? "border border-rose-400 focus:border-2 focus:border-rose-400"
                : ""
            }`}
            autoComplete="off"
            placeholder="Confirm Password"
            type={revealConfirmPassword}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={`h-11 w-11 p-3 text-gray-500 absolute right-1 top-1 rounded-md ${
              confirmPassword.length === 0 ? "hidden" : ""
            }`}
            onClick={toggleRevealConfirmPassword}
          >
            {revealConfirmPassword === "password" ? (
              <EyeIcon />
            ) : (
              <EyeSlashIcon />
            )}
          </div>
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 
              ${
                errors.confirmPassword && touched.confirmPassword
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="ml-1 -mb-6 pb-1  text-rose-400 text-sm">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <button
            disabled={!isValid || !dirty}
            className="rounded-md transition-all duration-300 text-lg bg-green-leaf w-full mt-4 py-2 px-6 text-white shadow-md hover:shadow-lg font-semibold hover:bg-emerald-600
            active:bg-emerald-600 active:scale-95 disabled:bg-emerald-500/40 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/70"
            type="submit"
          >
            Sign in
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            className="text-md font-semibold text-blue-500"
            to="/auth/login"
          >
            Already have an account?
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
