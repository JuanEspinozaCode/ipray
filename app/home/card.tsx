"use client"; 

import React from "react";

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
let imgs = [
  "https://images.vexels.com/media/users/3/155421/isolated/preview/a9fa9e88e0c885769014ee1023dbb98a-icono-de-cruz-cristiana-delgada.png",
  "https://www.onlygfx.com/wp-content/uploads/2018/08/6-grunge-cross-1.png",
];
const Card: React.FC<Props> = ({ data }) => {

  return (
    <div className="card-center">
      <div className="card-body">
        {data.map((item, index) => (
          <div key={item.id} className="card-un">
            <div className="card">
              <div className="card-text">
                <p className="text-container">
                  <h1 className="pray-header">Prayer</h1>
                  {item.prayer}
                </p>
                <img
                  src={imgs[0]}
                  height={75}
                  style={{ marginLeft: "5px" }}
                  alt=""
                /><button>Like</button> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
