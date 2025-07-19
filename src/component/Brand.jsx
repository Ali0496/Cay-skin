import "../style/brand.css";
import BrandCard from "./BrandCard";
import cream from "../image/cream (1) 1.svg";
import makeup from "../image/Group (3).svg";
import lipstick from "../image/gloss 1.svg";
import cotton from "../image/cotton-swabs 1.svg";

function Brand() {
  return (
    <section className="brand">
      <div className="container">
        <h4>Why brand name?</h4>
        <h2>Sed ut perspiciatis unde omy</h2>
        <h3>At vero eos et accusamus et iusto odio dignissimos</h3>
        <div className="barnd__card__wrapper">
          <BrandCard
            img={cream}
            title="Lorem ipsum"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
          />
          <BrandCard
            img={makeup}
            title="Sed ut perspiciatis unde"
            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
          <BrandCard
            img={lipstick}
            title="Ut enim ad minim"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
          />
          <BrandCard
            img={cotton}
            title="At vero eos eaccusamus"
            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
        </div>
      </div>
    </section>
  );
}

export default Brand;
