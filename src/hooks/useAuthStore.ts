import { AppDispatch, RootState } from "../store/store";
import {
  onChecking,
  onCleanErrorMessage,
  onLogin,
  onLogout,
  onUpdateUser,
} from "../store";
import { todoistAPI } from "../api/todosAPI";
import { useDispatch, useSelector } from "react-redux";
import { SignInValues, SignUpValues, User } from "../auth/interfaces";

export const useAuthStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const startSignIn = async (SignInValues: SignInValues): Promise<void> => {
    try {
      dispatch(onChecking());
      const { data } = await todoistAPI.post("/auth/signin", {
        ...SignInValues,
      });
      const { user, token } = data;
      localStorage.setItem("todoist-token", token);
      delete user.password;
      dispatch(onLogin(user));
    } catch (error: any) {
      const errorMessage: string = error?.response?.data?.message || "";
      dispatch(onLogout(errorMessage));
      console.log(error);
    }
  };

  const startSignUp = async (user: SignUpValues) => {
    try {
      dispatch(onChecking());
      const { data } = await todoistAPI.post("/auth/signup", { ...user });

      const { _doc, token } = data;
      localStorage.setItem("todoist-token", token);

      dispatch(onLogin({ ..._doc }));
    } catch (error: any) {
      const errorMessage: string = error?.response?.data?.message || "";
      dispatch(onLogout(errorMessage));
      console.log(error);
    }
  };

  const startLogout = () => {
    localStorage.setItem("todoist-token", "");
    dispatch(onLogout());
  };

  const startCleanErrorMessage = () => {
    dispatch(onCleanErrorMessage());
  };

  const checkAuthToken = async () => {
    try {
      const token = localStorage.getItem("todoist-token");

      if (!token) return dispatch(onLogout());

      const { data } = await todoistAPI.get("/auth/renew-token");
      const { user, token: newToken } = data;
      localStorage.setItem("todoist-token", newToken);
      delete user.password;
      dispatch(onLogin({ ...user }));
    } catch (error) {
      localStorage.setItem("todoist-token", "");
      dispatch(onLogout("The token has expired."));
      console.log(error);
    }
  };

  const startUpdatingUser = async (user: User) => {
    try {
      const { data } = await todoistAPI.put(`/auth/${user._id}`, { ...user });
      delete data.updatedUser.password;
      dispatch(onUpdateUser(data.updatedUser));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //Properties
    ...auth,
    //Methods
    checkAuthToken,
    startCleanErrorMessage,
    startLogout,
    startSignIn,
    startUpdatingUser,
    startSignUp,
  };
};
