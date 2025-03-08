import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [QuestionNo, setQuestionNo] = useState(1);
  const [Data, setData] = useState([]);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    let timer;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const startTimer = (minutes) => {
    setSeconds(minutes * 60);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <GlobalContext.Provider
      value={{
        question,
        setQuestion,
        answer,
        setAnswer,
        isRunning,
        seconds,
        startTimer,
        stopTimer,
        QuestionNo,
        setQuestionNo,
        Data,
        setData,
        name,
        setName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
