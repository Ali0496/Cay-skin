import "../style/products.css";
import arrowRight from "../image/Arrow Right.svg";
import arrowLeft from "../image/Arrow Left.svg";
import ProductCard from "./ProductCard";
import newTop from "../image/NEW.svg";
import product1 from "../image/product1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h3>Discover our products</h3>
          <div className="shop__all__btn">
            <h5>Shop all</h5>
            <div className="shopImgs">
              <img src={arrowLeft} alt="" />
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1.5}
          loop={true}
          spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard
              topImg={newTop}
              image={product1}
              text="Your Skin But Better CC+ Cream with SPF50 12ml "
              price="$28.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              topImg={newTop}
              image={product1}
              text="Your Skin But Better CC+ Cream with SPF50 12ml "
              price="$28.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              topImg={newTop}
              image={product1}
              text="Your Skin But Better CC+ Cream with SPF50 12ml "
              price="$28.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              topImg={newTop}
              image={product1}
              text="Your Skin But Better CC+ Cream with SPF50 12ml "
              price="$28.00"
            />
          </SwiperSlide>
        </Swiper>
      </div>{" "}
      {/* <div className="product__card__wrapper">
        <ProductCard
          topImg={newTop}
          image={product1}
          text="Your Skin But Better CC+ Cream with SPF50 12ml "
          price="$28.00"
        />
      </div> */}
    </section>
  );
}

export default Products;
