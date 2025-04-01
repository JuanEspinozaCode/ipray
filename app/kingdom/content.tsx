import React, { useState } from "react";

const imgs = ["pngegg.png"];
const background = ["kingdom.png"];
const titles = ["The Kingdom", "Purpose"];
const texts = [
  "Luke 17:20-21 – ”The kingdom of God does not come with observation; nor will they say, ‘See here!’ or ‘See there!’ For indeed, the kingdom of God is within you.”                       Colossians 1:13 – ”He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son.” Revelation 11:15 – ”The kingdoms of this world have become the kingdom of our Lord and of His Christ, and He shall reign forever and ever!”",
  "Living with Purpose and Meaning",
];

const TwoColumnsLayout = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev: number) => (prev + 1) % titles.length);

  const prevSlide = () =>
    setIndex((prev: number) => (prev - 1 + titles.length) % titles.length);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <div
          style={{
            flex: 1,
            background: "linear-gradient(to bottom, #EEC9BB, #F4B9A6)",
            height: "100%",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
            <img src={background[0]} height={400} />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: "20px",
            boxSizing: "border-box",
            background: "linear-gradient(to bottom, #4A708B, #6E8FA3)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <img
            src={imgs[0]}
            height={50}
            className="relative"
            style={{ marginBottom: "20px" }}
          />
          <h1>{titles[index]}</h1>
          <br />
            <h4 style={{ fontSize: 17, marginInline:230 }}>{texts[index]}</h4>
          <div>
            <button onClick={prevSlide}>&larr; Previous</button>
            <button onClick={nextSlide}>Next &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsLayout;
