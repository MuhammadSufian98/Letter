import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [Question, setQuestion] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        Question,
        setQuestion,
        isRunning,
        setIsRunning,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
