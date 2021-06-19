import React, { useEffect, useReducer, useState } from "react";
import { RouterApp } from "./routers/RouterApp";
import { AuthContext, HeroeContext } from "./Context";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [heroe, setHeroe] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <HeroeContext.Provider
        value={{
          heroe,
          setHeroe,
        }}
      >
        <div>
          <RouterApp />
        </div>
      </HeroeContext.Provider>
    </AuthContext.Provider>
  );
};
