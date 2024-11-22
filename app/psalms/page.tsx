import React from "react";
import psalms from "./data";

interface Props {}

import { CSSProperties } from "react";

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  paddingTop: '150px',
};

const PsalmContainer = {
  marginBottom: "1.2rem",
  maxWidth: "700px",
  border: '1px solid lightgrey',
  padding: '25px',
  borderRadius: '8px',
};

const About = (props: Props) => {
  return (
    <div style={ContainerStyle}>
      <div
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Psalms
      </div>
      <div>
        {psalms.map((psalm, index) => (
          <div key={index} style={PsalmContainer}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              {psalm.title}
            </div>
            <div style={{ fontStyle: "italic" }}>{psalm.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
