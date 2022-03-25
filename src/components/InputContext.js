import React, { createContext } from "react";
import { useState, useContext } from "react";
export const InputContext = createContext();
export function InputProvider(props) {
  const [value, setValue] = useState({
    landingScreen: { input1: "", input2: "", input3: "" },
  });
  return <InputContext.Provider>{props.children}</InputContext.Provider>;
}

export default InputProvider;
