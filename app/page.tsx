import React from 'react';
import Links from "./Routes/Routes"

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
      {/* {JSON.stringify(mockData)} */}
      <Links />
    </div>
  );
};
