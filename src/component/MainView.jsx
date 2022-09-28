import "./MainView.scss";
import { NewProduct } from "./main/NewProduct";
import { BrandMetaphor } from "./main/BrandMetaphor";
import { useEffect, useState } from "react";
import { DBload } from "../function/DBload";

function MainView() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct((props) => props = DBload("FABRIC"));
    console.log(product);
  }, []);
  return (
    <section className="main-view">
      <div className="new_product">
        <NewProduct />
      </div>
      <div className="brand-content">
        <div className="title">
          <h4>당신의 영혼에 향기를 아로새기다</h4>
        </div>
        <div className="content">
          <p>
            해외 유명 브랜드나 고가의 니치향수가 아닌, 한국에서 한국인 조향사가 섬세하게
            조향한 향수를 선보입니다.<br />
            아직 세상에는 없는, 하지만 우리 모두가 기다려온 향을 세상에 꺼내어 놓으려 해요.<br />
            당신의 영혼에 아로세길 향을 만드는 아로&#40;ahro&#41;입니다.
          </p>
        </div>
      </div>
      <div className="brand-metaphor">
        <BrandMetaphor />
      </div>
      <div className="freesia">
        <div className="background"></div>
      </div>

      <div className="horizontal-boder"></div>
    </section>
  )
}

export default MainView;