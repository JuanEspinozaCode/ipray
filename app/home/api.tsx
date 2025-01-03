"use client";

import React, { useEffect, useState } from "react";

export default function Api() {
  const [verse, setVerse] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      // How can we randomize this?
      const response = await fetch("https://bible-api.com/genesis%2011:1");
      const data = await response.json();
      // Promise -> server -> response -> data (JSON) -> setVerse
      setVerse(data.text);
    }

    const handleError = (e: any) => console.log("Error fetching the verse:", e);
    fetchData().catch(handleError);
  }, []);

  console.log('plop verse', { verse })
  return (
    <div>
      <div className="daily-verse">
        <h1>Daily Verse of the Day</h1>
        <p>{verse}</p>
      </div>
    </div>
  );
}