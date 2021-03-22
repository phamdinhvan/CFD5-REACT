import React from "react";

export default function Founder({ thumbnail, name, title }) {
  return (
    <div>
      <div className="item col-md-6 col-sm-6">
        <div className="wrap">
          <div className="cover">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <p className="title">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
