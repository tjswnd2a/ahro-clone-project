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

  const [counter, setCounter] = useState(1);
  const [total_mount, setMount] = useState(0);
  useEffect(() => {
    console.log(location.state.item.img);

    setName(location.state.item.name);
    setPrice(location.state.item.current_price);
    setContent(location.state.item.content);
    setItemImg(location.state.item.img);
    setPrevious(location.state.item.previous_price);
    setGrade(location.state.item.grade);

  }, [])

  const onClickDown= () => {
    if( counter > 1 ){
      setCounter( (current) => current -= 1 );
    }
  }
  const onClickUp= () => {
    setCounter( (current) => current += 1 );

  }
  useEffect(() => {
    setMount((prop) => prop = price);
  }, [price])
  useEffect(() => {
    setMount((prop) => prop = price * counter);
  }, [counter])

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
          <div className="current">{price}원</div>
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
          <div className="up-down">
            <div className="down" onClick={onClickDown}>-</div>
            <div className="sum-total">{counter}</div>
            <div className="up" onClick={onClickUp}>+</div>
          </div>
        </div>
        <div className="result">
          <div className="order-number">
            <h4>주문 수량</h4>
            <p>{counter}개</p>
          </div>
          <div className="result-pay">
            <h4>총 상품 금액</h4>
            <p>{total_mount}원</p>
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