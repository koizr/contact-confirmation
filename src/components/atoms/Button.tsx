import React from "react";

type Props = {
  children: React.ReactChild;
};

export const Button: React.FC<Props> = (props) => (
  <button>{props.children}</button>
);
