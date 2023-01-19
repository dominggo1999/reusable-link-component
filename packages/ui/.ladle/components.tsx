import type { GlobalProvider } from "@ladle/react";
import React from "react";
import "../index.css";
import "./style.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  return <div className={globalState.theme}>{children}</div>;
};
