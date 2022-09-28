import "./PerfumesItem.scss";

export default function PerfumesItem({ img, name, price }) {
  console.log(price);
  return (
    <div className="item-img">
      <img src={img} alt="" />
      <div className="sale">
        <h4>SALE</h4>
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}