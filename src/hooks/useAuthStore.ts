import { AppDispatch, RootState } from "../store/store";
import { onChecking, onCleanErrorMessage, onLogin, onLogout } from "../store";
import { todoistAPI } from "../api/todosAPI";
import { useDispatch, useSelector } from "react-redux";
import { SignInValues, SignUpValues } from "../auth/types";

export const useAuthStore = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const startSignIn = async (SignInValues: SignInValues): Promise<void> => {
    try {
      dispatch(onChecking());
      const { data } = await todoistAPI.post("/auth/signin", {
        ...SignInValues,
      });

      const { _doc: user, token } = data;
      localStorage.setItem("todoist-token", token);
    
      dispatch(onLogin({ ...user }));
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
      const { user, token:newToken } = data;
      localStorage.setItem("todoist-token", newToken);


      dispatch(onLogin({ ...user }));
    } catch (error) {
      localStorage.setItem("todoist-token", "");
      dispatch(onLogout("The token has expired."));
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
    startSignUp,
  };
};
