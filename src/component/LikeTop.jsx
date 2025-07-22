import "../style/like-top.css";
import arrowRight from "../image/Arrow Right.svg";
import arrowLeft from "../image/Arrow Left.svg";
import newTop from "../image/NEW.svg";
import product1 from "../image/product1.png";
import product2 from "../image/productImg2.png";
import saleTop from "../image/product2.svg";
import product3 from "../image/image 9 (1).png";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function LikeTop() {
  return (
    <section className="likeTop">
      <div className="container">
        <div className="products__top">
          <h3>You might also like</h3>
          <div className="shop__all__btn">
            <div className="shopImgs">
              <span>Shop all</span>
              <div>
                <img src={arrowLeft} alt="" />
                <img src={arrowRight} alt="" />
              </div>
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
              slidesPerView: 2,
              spaceBetween: 25,
            },
            954: {
              slidesPerView: 3.3,
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
              topImg={saleTop}
              image={product2}
              text="KEM DUONG VT CICA - VT CICA CREAM "
              price="$28.00"
              oldPrice="$32.00"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              topImg={newTop}
              image={product3}
              text="Niche Beauty CCC Cream – Niche Beauty "
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
      </div>
    </section>
  );
}

export default LikeTop;
