import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductPage.scss";
export default function ProductPage() {
  const location = useLocation();
  // console.log(location.state.name.id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [previous, setPrevious] = useState("");
  const [content, setContent] = useState("");
  const [itemImg, setItemImg] = useState("");
  useEffect(() => {
    console.log(location.state.item.img);

    setName(location.state.item.name);
    setPrice(location.state.item.current_price);
    setContent(location.state.item.content);
    setItemImg(location.state.item.img);
    setPrevious(location.state.item.previous_price);

  }, [])
  console.log(itemImg);
  console.log(name);
  return (
    <div className="product-buy">
      <div className="item">
        <img src={itemImg} alt="" />
      </div>
      <div className="product-detail">
        <div className="name">{name}</div>
        <div className="price">
          <div className="current">{price}</div>
          <div className="previous">{previous}</div>
        </div>
        <div className="content">{content}</div>
        <div className="delivery">
          <h4>배송비</h4>
          <p>
            3,000원 (50,000원 이상 구매 시 무료)<br />
            제주 및 도서 산간 1,000,원 추가
          </p>
        </div>
      </div>
    </div>
  )
}