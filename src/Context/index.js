import React, { createContext, useReducer } from "react";
import { reducer } from "../reducers/index";

export const Context = createContext();

export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, [], () => {
    return {
      action: "openModal"
    };
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
