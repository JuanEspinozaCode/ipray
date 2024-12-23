import React from "react";
import Links from "./Routes/Routes";
import Comments from "./home/comments";
import Home from "./home/page";
import Api from "./home/api";


export default function App() {
  /*
    Everything here without 'use client' is server side rendered
  */
  return (
    <div>
      <Links />
      <Home />
      
      <div className="row">
        <div className="column">
          <Api />
          <Comments />

        </div>
      </div>
    </div>
  );
}
