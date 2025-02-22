import React from "react";
import TwoColumnsLayout from "./content";

interface Props {}

const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const Kingdom = (props: Props) => {
  return <TwoColumnsLayout />;
};
export default Kingdom;
