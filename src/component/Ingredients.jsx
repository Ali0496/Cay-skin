import "../style/ingredients.css";
import ingr from "../image/ingr.png";
import ingr1 from "../image/ingricon.svg";
import ingr2 from "../image/ingricon (1).svg";
import ingr3 from "../image/ingricon (2).svg";
import ingr4 from "../image/ingricon (3).svg";
import ingr5 from "../image/ingricon (4).svg";
import ingr6 from "../image/ingricon (5).svg";

function Ingredients() {
  return (
    <section className="ingredients">
      <div className="container">
        <div className="ingrid__wrapper">
          <div className="ingr__content">
            <h2>Ingredients</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="ingr__wrapper">
              <div className="ingr__card">
                <img src={ingr1} alt="" />
                <h5>Hydrating Nectar</h5>
              </div>
              <div className="ingr__card">
                <img src={ingr2} alt="" />
                <h5>Aloe steam cells</h5>
              </div>
              <div className="ingr__card">
                <img src={ingr3} alt="" />
                <h5>Seamoss</h5>
              </div>
              <div className="ingr__card">
                <img src={ingr4} alt="" />
                <h5>Niacinamide</h5>
              </div>
              <div className="ingr__card">
                <img src={ingr5} alt="" />
                <h5>Almond oil</h5>
              </div>
              <div className="ingr__card">
                <img src={ingr6} alt="" />
                <h5>Grapeseed oil</h5>
              </div>
            </div>
            <h4>Full Ingredient glossary</h4>
          </div>
          <div className="ingr__img">
            <img src={ingr} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
