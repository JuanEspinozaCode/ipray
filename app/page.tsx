import React from 'react';
import Links from "./Routes/Routes"
import Home from './home/page';
import Card from './home/card';

const mockData = [
  {
    id: 1,
    prayer: "I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.I want to grow in my walk with God and not be afraid of what's ahead.",
    username: "Alejandro Chang",
    date: "2021-07-02",
    likes: 0,
  },
  // {
  //   id: 1,
  //   prayer: "I want to be a better person",
  //   username: "Juan Espinoza",
  //   date: "2021-07-02",
  //   likes: 0,
  // },
  // {
  //   id: 1,
  //   prayer: "I want to be a better person",
  //   username: "Filipe",
  //   date: "2021-07-02",
  //   likes: 0,
  // }
];
 
export default function App() {
  /*
    Everything here without 'use client' is server side rendered
  */
  return (
    <div>
      {/* {JSON.stringify(mockData)} */}
      <Links />
      <Home />
      <Card data = {mockData} />
    </div>
  );
};
