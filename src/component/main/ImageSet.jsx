export default function ImageSet({ img, name, content, img_right }) {
  console.log(name);
  return (
    <div className="popular">
      {img_right ?
        <div className="popular-product-R">
          <div className="detail">
            <div className="name">{name}</div>
            <div className="content">{content}</div>
          </div>
          <div className="product-img">
            <img src={img} alt="" />
          </div>
        </div>
        : null}
    </div>
  );
}