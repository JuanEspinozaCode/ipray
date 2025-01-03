"use client";

import React, { useState } from "react";

interface DataItem {
  id: number;
  prayer: string;
  username: string;
  date: string;
  likes: number;
}
interface Props {
  data: DataItem[];
}
const imgs = [
  "https://images.vexels.com/media/users/3/155421/isolated/preview/a9fa9e88e0c885769014ee1023dbb98a-icono-de-cruz-cristiana-delgada.png",
  "https://www.onlygfx.com/wp-content/uploads/2018/08/6-grunge-cross-1.png",
];

const Card: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="card-body">
        <div className="carousel">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`card-item ${
                index === currentIndex ? "active" : "inactive"
              }`}
              style={{
                display: index === currentIndex ? "block" : "none",
              }}>
              <div className="card">
                <div className="card-text">
                  <img
                    src={imgs[0]}
                    height={75}
                    style={{ marginLeft: "5px" }}
                    alt=""
                  />
                  <p className="username"> {item.username}</p>
                  <p className="text-container">{item.prayer}</p>
                  <br />

                  <div className="buttons">
                    <button className="handleButton" onClick={handlePrev}>
                      ←
                    </button>
                    <button className="like-btn">Like</button>
                    <button className="handleButton" onClick={handleNext}>
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
