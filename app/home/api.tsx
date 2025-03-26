"use client";

import React, { useEffect, useState } from "react";

// Bible books with chapter counts
const bibleBooks = {
  Genesis: 50,
  Exodus: 40,
  Leviticus: 27,
  Numbers: 36,
  Deuteronomy: 34,
  Joshua: 24,
  Judges: 21,
  Ruth: 4,
  "1 Samuel": 31,
  "2 Samuel": 24,
  "1 Kings": 22,
  "2 Kings": 25,
  "1 Chronicles": 29,
  "2 Chronicles": 36,
  Ezra: 10,
  Nehemiah: 13,
  Esther: 10,
  Job: 42,
  Psalms: 150,
  Proverbs: 31,
  Ecclesiastes: 12,
  "Song of Solomon": 8,
  Isaiah: 66,
  Jeremiah: 52,
  Lamentations: 5,
  Ezekiel: 48,
  Daniel: 12,
  Hosea: 14,
  Joel: 3,
  Amos: 9,
  Obadiah: 1,
  Jonah: 4,
  Micah: 7,
  Nahum: 3,
  Habakkuk: 3,
  Zephaniah: 3,
  Haggai: 2,
  Zechariah: 14,
  Malachi: 4,
  Matthew: 28,
  Mark: 16,
  Luke: 24,
  John: 21,
  Acts: 28,
  Romans: 16,
  "1 Corinthians": 16,
  "2 Corinthians": 13,
  Galatians: 6,
  Ephesians: 6,
  Philippians: 4,
  Colossians: 4,
  "1 Thessalonians": 5,
  "2 Thessalonians": 3,
  "1 Timothy": 6,
  "2 Timothy": 4,
  Titus: 3,
  Philemon: 1,
  Hebrews: 13,
  James: 5,
  "1 Peter": 5,
  "2 Peter": 3,
  "1 John": 5,
  "2 John": 1,
  "3 John": 1,
  Jude: 1,
  Revelation: 22,
};

export default function Api() {
  const [verse, setVerse] = useState<string>("");

  useEffect(() => {
    const fetchDailyVerse = async () => {
      const storedVerse = localStorage.getItem("dailyVerse");
      const storedDate = localStorage.getItem("verseDate");
      const today = new Date().toISOString().split("T")[0]; // Get YYYY-MM-DD format

      if (storedVerse && storedDate === today) {
        // Use the stored verse if it's from today
        setVerse(storedVerse);
      } else {
        // Otherwise, fetch a new random verse
        const books = Object.keys(bibleBooks) as Array<keyof typeof bibleBooks>;
        const randomBook = books[Math.floor(Math.random() * books.length)];
        const maxChapters = bibleBooks[randomBook];
        const randomChapter = Math.floor(Math.random() * maxChapters) + 1;

        const response = await fetch(`https://bible-api.com/${encodeURIComponent(randomBook)} ${randomChapter}`);
        const data = await response.json();

        if (data.verses && data.verses.length > 0) {
          const randomVerse = data.verses[Math.floor(Math.random() * data.verses.length)];
          const verseText = `${data.reference}: ${randomVerse.text}`;

          // Store the new verse in localStorage
          localStorage.setItem("dailyVerse", verseText);
          localStorage.setItem("verseDate", today);

          setVerse(verseText);
        } else {
          setVerse("Could not fetch a random verse, try again.");
        }
      }
    };

    fetchDailyVerse().catch((e) => console.log("Error fetching the verse:", e));
  }, []);

  return (
    <div className="daily-verse-container">
      <div className="daily-verse">
        <h1 className="verse-title">Daily Verse of the Day</h1>
        <p className="verse-text">{verse}</p>
      </div>
    </div>
  );
}
