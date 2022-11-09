import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useFormik } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import * as Yup from "yup";

export const LoginPage: FC = (): JSX.Element => {
  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

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
    values: { emailUser, password },
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <LayoutAuth typePage="auth" titlePage="Log In">
      <form onSubmit={handleSubmit}>
        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11`}
            autoComplete="off"
            placeholder="Email or User"
            type="text"
            name="emailUser"
            required
            value={emailUser}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
              bg-white left-3.5 text-gray-400 peer-focus:text-gray-400
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="user"
          >
            Email or User
          </label>
        </div>

        <div className="pb-7 h-20 relative">
          <input
            className={`peer placeholder-transparent h-11`}
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
              text-gray-400 peer-focus:text-gray-400
              block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 peer-placeholder-shown:left-4`}
            htmlFor="password"
          >
            Password
          </label>
        </div>

        <div>
          <button
            disabled={!isValid || !dirty}
            className="rounded-md transition-all duration-300 text-lg bg-green-leaf w-full mt-4 py-2 px-6 text-white shadow-md hover:shadow-lg font-semibold hover:bg-emerald-600
            active:bg-emerald-600 active:scale-95 disabled:bg-emerald-500/40 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/70"
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>

      <div className="mt-4 flex justify-center">
        <Link className="text-md font-semibold text-blue-500" to="/auth/signin">
          Don't you have an account?
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
