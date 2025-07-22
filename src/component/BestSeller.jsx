import seller from "../image/bestSeller.svg";
import sort from "../image/sort by.svg";
import newP from "../image/NEW.svg";
import nproduct1 from "../image/product1.png";
import product2 from "../image/productImg2.png";
import product3 from "../image/image 9 (1).png";
import saleTop from "../image/product2.svg";
import "../style/seller.css";

import ProductCard from "./ProductCard";
function BestSeller() {
  return (
    <section className="best__seller">
      <div className="container">
        <div className="seller">
          <button>
            <img src={seller} alt="" />
          </button>
        </div>
        <div className="sort">
          <button>
            <img src={sort} alt="" />
          </button>
        </div>
        <div className="seller__wrapper">
          <ProductCard
            topImg={newP}
            image={nproduct1}
            text="Your Skin But Better CC+ Cream with SPF50 12ml "
            price="$28.00"
          />
          <ProductCard
            topImg={saleTop}
            image={product2}
            text="KEM DUONG VT CICA - VT CICA CREAM "
            price="$28.00"
            oldPrice="$32.00"
          />
          <ProductCard
            topImg={newP}
            image={product3}
            text="Niche Beauty CCC Cream – Niche Beauty "
            price="$28.00"
          />
          <ProductCard
            topImg={newP}
            image={nproduct1}
            text="Your Skin But Better CC+ Cream with SPF50 12ml "
            price="$28.00"
          />
          <ProductCard
            topImg={saleTop}
            image={product2}
            text="KEM DUONG VT CICA - VT CICA CREAM "
            price="$28.00"
            oldPrice="$32.00"
          />
          <ProductCard
            topImg={newP}
            image={product3}
            text="Niche Beauty CCC Cream – Niche Beauty "
            price="$28.00"
          />
        </div>
        <h5>Showing 16 of 23</h5>
        <button className="load__more">load more</button>
      </div>
    </section>
  );
}

export default BestSeller;
