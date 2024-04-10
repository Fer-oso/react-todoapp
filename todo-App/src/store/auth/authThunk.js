import { loginUserWithEmailAndPassword } from "../../provider/firebase/functions/auth/loginUserWithEmailAndPasword";
import { logoutUser } from "../../provider/firebase/functions/auth/logoutUser";
import { registerUserWithEmailAndPassword } from "../../provider/firebase/functions/auth/registerUserWithEmailAndPassword";
import { login, logout, register } from "./authSlice";

export const startCreationUserWithEmailAndPassword = ({
  name,
  password,
  email,
}) => {
  return async (dispatch) => {
    const { status, errorMessage } = await registerUserWithEmailAndPassword({
      name,
      email,
      password,
    });

    dispatch(register({ status, errorMessage }));
  };
};

export const startLoginUserwithEmailAndPassword = ({ email, password }) => {
  

  return async (dispatch) => {
    const { status, userAuthenticated } = await loginUserWithEmailAndPassword({
      email,
      password,
    });

    if (status === "authenticated") {
      dispatch(login({ status, userAuthenticated }));
    }
  };
};

export const startLogoutUser = () => {
  return async (dispatch) => {
    const { status } = await logoutUser();

    dispatch(logout({ status }));
  };
};
