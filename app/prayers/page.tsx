"use client";
import React from "react";
import Card from "./card";

interface Props {}
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
const Prayers = (props: Props) => {
  return <Card data={mockData} />;
};
export default Prayers;
