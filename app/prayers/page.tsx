"use client";
import React from "react";
import Card from "./card";

interface Props {}
const mockData = [
  {
    id: 1,
    prayer: "Lord of Peace, grant me tranquility in my heart and mind. Calm my fears and anxieties, and fill me with Your presence, so I may find rest in You. Help me to be a vessel of peace to others, spreading Your love wherever I go.",
    username: "John Smith",
    date: "2021-07-02",
    likes: 0,
  },
  {
    id: 1,
    prayer: "Heavenly Father, I thank You for the many blessings You have bestowed upon me. I am grateful for the love, strength, and opportunities You provide, even in times of difficulty. May my heart always be filled with appreciation for Your endless grace and for the gift of each new day.",
    username: "James Doe",
    date: "2021-07-02",
    likes: 0,
  },
  {
    id: 1,
    prayer: "Lord, guide my steps today as I seek clarity in the midst of uncertainty. Help me make decisions with wisdom and compassion, trusting that Your plan is always greater than my own. Surround me with Your light, so I may walk in faith and peace, knowing that You are with me in every moment.",
    username: "Julius Caesar",
    date: "2021-07-02",
    likes: 0,
  },
];
const Prayers = (props: Props) => {
  return <Card data={mockData} />;
};
export default Prayers;
