function ProductCard({ image, topImg, text, price }) {
  return (
    <div className="product__card">
      <div className="product__wrapper" style={{ backgroundColor: " #7373d7" }}>
        <img className="new" src={topImg} alt="" />
        <img className="product1" src={image} alt="" />
        <hr />
        <h4>+ Quick Shop</h4>
      </div>
      <p>{text}</p>
      <h6>{price}</h6>
    </div>
  );
}

export default ProductCard;
