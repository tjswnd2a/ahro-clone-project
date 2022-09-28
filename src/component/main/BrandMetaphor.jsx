import "./BrandMetaphor.scss";

export default function BrandMetaphor() {
  return (
    <div className="brand-metaphor">

      <div className="ahro-written">
        <div className="product">
          <img src="./images/image1.PNG" alt="" />
        </div>
        <div className="content">
          <h4>아로의 향수 바틀은<br />책을 닮았어요.</h4>
          <p className="line1">
            한쪽은 책등처럼 둥글고,<br />
            한쪽은 책장처럼 곧게 뻗어있죠.
          </p>
          <p className="line2">
            책등에는 은박으로<br />
            'written by ahro'라고 적혀있답니다.
          </p>
          <p className="line3">
            각각의 바틀은 수제작으로 만들어져요.
          </p>
        </div>
      </div>

      <div className="ahro-package">
        <div className="product">
          <img src="./images/image2.PNG" alt="" />
        </div>
        <div className="content">
          <h4>아로의 패키지 또한<br />책을 닮았어요.</h4>
          <p className="line1">
            프리지아 일러스트가 담긴 띠지와,<br />
            컬러에 맞춘 책밴드로 디테일을 살렸죠.
          </p>
          <p className="line2">
            양장본처럼 단단하게 만들어진 상자에는<br />
            음각으로 ahro가 새겨져있고요.
          </p>
          <p className="line3">
            상자를 오픈하면 향수와 함께<br />
            향기의 세계를 안내하는<br />
            작은 책자가 담겨 있답니다.
          </p>
        </div>
      </div>
    </div>
  );
}