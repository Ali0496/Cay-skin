function BrandCard({ img, title, text }) {
  return (
    <div className="brandCard">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default BrandCard;
