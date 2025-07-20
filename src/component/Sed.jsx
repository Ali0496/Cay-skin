import "../style/sed.css";
import sedImg from "../image/sed_bg_image (2).png";

function Sed() {
  return (
    <section className="sed">
      <div className="sed__img">
        <img src={sedImg} alt="" />
      </div>
      <div className="sed__wrapper">
        <h3>Featuring</h3>
        <h2>Sed ut perspiciatis</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </p>
        <button>SHOP NOW</button>
      </div>
    </section>
  );
}

export default Sed;
