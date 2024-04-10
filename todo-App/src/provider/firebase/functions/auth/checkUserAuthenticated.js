import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { credentialsCheck, login } from "../../../../store/auth/authSlice";
import { firebaseAuth } from "../../config/config";
import { startLoadTasks } from "../../../../store/todos/taskThunk";
import { noTaskSelectedInitialState } from "../../../../store/todos/taskSlice";

import { Navigate } from "react-router-dom";

export const checkUserAuthenticated = () => {

  const { status } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      dispatch(noTaskSelectedInitialState(""));
      if (user) {
        dispatch(credentialsCheck());
        setTimeout(() => {
          const { uid, displayName, email, photoUrl } = user;

          const userAuthenticated = { uid, displayName, email, photoUrl };

          dispatch(login({ status: "authenticated", userAuthenticated }));
               
          dispatch(startLoadTasks());
        }, 1000);
      }
    });
  }, []);

  return {
    status,
  };
};
