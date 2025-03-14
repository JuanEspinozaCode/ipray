import React from "react";

const imgs = ["pngegg.png"];

const background = ["kingdom.png"];

const TwoColumnsLayout = () => {
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
            padding: "20px",
            background: "linear-gradient(to bottom, #EEC9BB, #F4B9A6)",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "107%",
            }}>
            <img
              src={background[0]}
              height={400}
              alt=""></img>
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
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
            <img
              src={imgs[0]}
              height={50}
              style={{ position: "relative" }}
              alt=""
            />
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                paddingTop: "50px",
              }}>
              The Kingdom
            </h1>
            <h2 style={{ fontSize: "19px", paddingTop: "45px" }}>
              Requiremants of the kingdom
            </h2>
            <h4
              style={{
                paddingLeft: "200px",
                paddingRight: "200px",
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "1.2",
              }}>
              Faith in Him as Lord and Savior (John 3:3 - "unless one is born
              again, he cannot see the kingdom of God"). Repentance from sin and
              submission to God’s rule (Matthew 4:17). Humility and childlike
              faith (Matthew 18:3). Jesus commissioned His followers to spread
              the good news of the Kingdom throughout the world (Matthew
              28:18-20). This mission is carried out through evangelism, acts of
              service, and embodying Kingdom values in daily life.The ultimate
              fulfillment of the Kingdom will come when Christ returns to
              establish His eternal reign, bringing justice, peace, and the
              complete restoration of creation (Revelation 11:15 - “The kingdom
              of the world has become the kingdom of our Lord and of His Christ,
              and He will reign forever and ever”). In essence, the Kingdom of
              God is both a present reality and a future hope, calling believers
              to live under God's reign while anticipating its full realization
              in eternity.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnsLayout;
