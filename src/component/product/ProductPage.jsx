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
  const [grade, setGrade] = useState(0);
  useEffect(() => {
    console.log(location.state.item.img);

    setName(location.state.item.name);
    setPrice(location.state.item.current_price);
    setContent(location.state.item.content);
    setItemImg(location.state.item.img);
    setPrevious(location.state.item.previous_price);
    setGrade(location.state.item.grade);

  }, [])
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (i < grade) {
        result.push(<span key={i}>★</span>);
      } else {
        result.push(<span key={i}>☆</span>);
      }
    }
    return result;
  };

  console.log(itemImg);
  console.log(name);
  return (
    <div className="product-buy">
      <div className="item">
        <img src={itemImg} alt="" />
      </div>
      <div className="product-detail">
        <div className="name">{name}</div>
        <div className="item-grade">
          {rendering()}
        </div>
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
        <div className="counter">
          <h4>수량</h4>
        </div>
        <div className="result">
          <div className="order-number">
            <h4>주문 수량</h4>
            <p>1개</p>
          </div>
          <div className="result-pay">
            <h4>총 상품 금액</h4>
            <p>{price}</p>
          </div>
          <div className="btn">
            <button className="puchase-btn">구매 하기</button>
            <button className="shopping-btn">장바구니에 담기</button>
          </div>
        </div>
      </div>
    </div>
  )
}