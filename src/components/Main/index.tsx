import React from "react";
import MainView from "./main.view";

export const Main: React.FC = (props) => {
  return <MainView children={props.children} />;
};
