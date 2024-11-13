import React from 'react';
import Links from "./Routes/Routes"
import Card from './home/card';
import Comments from './home/comments';
import Home from './home/page';
const mockData = [
  {
    id: 1,
    prayer: "I want to be a better person",
    username: "Alejandro Chang",
    date: "2021-07-02",
    likes: 0,
  },
  {
    id: 1,
    prayer: "I want to be a better person",
    username: "Juan Espinoza",
    date: "2021-07-02",
    likes: 0,
  },
  {
    id: 1,
    prayer: "I want to be a better person",
    username: "Filipe",
    date: "2021-07-02",
    likes: 0,
  },
];
 
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
    <h1>people who prayed</h1>
    <div className='ppl-prayed'>
      <div className="ppl-prayed-name">
      @username
      </div>
      <div></div>
    </div>
  </div>
  <div className="column">
  <Card data = {mockData} />
  </div>
  <div className="column" >
    <Comments />
  </div>
</div>
    </div>
  );
};
