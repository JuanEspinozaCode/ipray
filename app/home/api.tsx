"use client";

import React, { useEffect, useState } from "react";

export default function Api() {
  const [verse, setVerse] = useState<string>("");

  useEffect(() => {
    const getRandomVerse = () => {
      const books = ["genesis", "exodus", "leviticus", "numbers", "deuteronomy"];
      const randomBook = books[Math.floor(Math.random() * books.length)];
      const randomChapter = Math.floor(Math.random() * 50) + 1; // Assuming max 50 chapters
      const randomVerse = Math.floor(Math.random() * 30) + 1; // Assuming max 30 verses per chapter

      return `${randomBook}%20${randomChapter}:${randomVerse}`;
    };

    const verseUrl = `https://bible-api.com/${getRandomVerse()}`;

    fetch(verseUrl)
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