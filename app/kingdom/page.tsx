import React from "react";

interface Props {};

const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const Kingdom = (props: Props) => {
  return <div style={ContainerStyle}>About the Kingdom</div>;
};
export default Kingdom;
