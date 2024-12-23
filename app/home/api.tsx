"use client";

import React, { useEffect, useState } from "react";

export default function Api() {
  const [verse, setVerse] = useState<string>("");

  useEffect(() => {
    fetch("https://bible-api.com/genesis%2011:1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setVerse(data.text);
      })
      .catch(error => console.error("Error fetching the verse:", error));
  }, []);

  return (
    <div>
      <div className="daily-verse">
        <h1>Daily Verse of the Day</h1>
        <p>{verse}</p>
      </div>
    </div>
  );
}