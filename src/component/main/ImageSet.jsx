import { useEffect, useState } from "react";
import "./ImageSet.scss";
export default function ImageSet({ fabric }) {

  return (
    <div className="popular">
      {(fabric.popular_number % 2 === 0) ?
        (<div className="popular-product-L">
          <div className="product-img">
            <img src={fabric.img2} alt="" />
          </div>
          <div className="detail">
            <div className="name">{fabric.name}</div>
            <div className="content">{fabric.content}</div>
          </div>
        </div>)
        : (<div className="popular-product-R">
          <div className="detail">
            <div className="name">{fabric.name}</div>
            <div className="content">{fabric.content}</div>
          </div>
          <div className="product-img">
            <img src={fabric.img2} alt="" />
          </div>
        </div>)}
    </div>
  );
}