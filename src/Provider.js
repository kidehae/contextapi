import React, { createContext, useState } from "react";
import App from "./App";

export const dataProvider = createContext();

const Provider = ({ children }) => {
  const [status, setStatus] = useState("Login");
  return (
    <>
      <dataProvider.Provider value={{ status, setStatus }}>
        {children}
      </dataProvider.Provider>
    </>
  );
};

export default Provider;
