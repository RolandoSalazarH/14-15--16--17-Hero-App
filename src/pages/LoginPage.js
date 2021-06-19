import React, { useContext } from "react";
import { AuthContext } from "../Context";
import { types } from "../type/types";

export const LoginPage = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    history.replace("/");

    dispatch({ type: types.login, payload:{ name:"Rolando" , Apellido:"Salazar"} });
  };

  return (
    <div className="container">
      <h1>Soy un Login Page</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
