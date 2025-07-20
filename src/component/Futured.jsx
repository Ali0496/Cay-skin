import "../style/futured.css";
import futured1 from "../image/press.svg";
import futured2 from "../image/press (1).svg";
import futured3 from "../image/press (2).svg";
import futured4 from "../image/press (3).svg";

function Futured() {
  return (
    <section className="futured">
      <div className="container">
        <h4>Featured</h4>
        <div className="logo__wrapper">
          <img src={futured1} alt="" />
          <img src={futured2} alt="" />
          <img src={futured3} alt="" />
          <img src={futured4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Futured;
