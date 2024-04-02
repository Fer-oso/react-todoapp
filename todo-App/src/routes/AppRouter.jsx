import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./auth/AuthRoutes";
import { TodoRoutes } from "./todo/TodoRoutes";

import { CheckingAuth } from "../pages/authentication/CheckingCredentials";
import { checkUserAuthenticated } from "../provider/firebase/functions/auth/checkUserAuthenticated";

export const AppRouter = () => {
  const { status } = checkUserAuthenticated();

  if (status === "checking user credentials") {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<TodoRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  );
};
