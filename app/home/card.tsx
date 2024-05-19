import React from "react";

interface Props {
  data: {
    id: number;
    prayer: string;
    username: string;
    date: string;
    likes: number;
  }[];
}

let imgs = ['https://images.vexels.com/media/users/3/155421/isolated/preview/a9fa9e88e0c885769014ee1023dbb98a-icono-de-cruz-cristiana-delgada.png','https://www.onlygfx.com/wp-content/uploads/2018/08/6-grunge-cross-1.png']

const Card: React.FC<Props> = ({ data }) => {
  // Use the mockData here
  return (
    <div className="card-center">
      <div className="card-body">
        {data.map((item) => (
          <div key={item.id} className="card-un">
            {/* @{item.username} */}
            <div className="card">
              
              <div className="card-text">
                
                <p className="text-container"><h1 className="pray-header">Prayer</h1>{item.prayer}</p>
                <img src={imgs[1]} height={75} style={{marginLeft: "5px"}} alt="" />
                {/* 
          <p>Date: {item.date}</p> */}
              </div>
            </div>
            {/* <div className="card-likes" style={{fontSize: "22px"}}>&#x1f64f; {item.likes}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
