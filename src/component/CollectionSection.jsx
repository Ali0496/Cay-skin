import "../style/collection__section.css";
import arrow from "../image/twoArrows.svg";
import coll1 from "../image/Mask Group (2).png";
import coll2 from "../image/Mask Group.png";
import coll3 from "../image/Mask Group (2).png";
import coll4 from "../image/Mask Group.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CollectionSection() {
  return (
    <section className="collection__section">
      <div className="container">
        <div className="collection__section__content">
          <h2>Collections</h2>
          <img src={arrow} alt="" />
        </div>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum, Cream Shop
        </p>
        <Swiper slidesPerView={2.2} spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <div className="coll_card">
              <img src={coll1} alt="" />
              <h4>Sed ut perspiciatis</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="coll_card">
              <img src={coll2} alt="" />
              <h4>Sed ut perspiciatis</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="coll_card">
              <img src={coll3} alt="" />
              <h4>Sed ut perspiciatis</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="coll_card">
              <img src={coll4} alt="" />
              <h4>Sed ut perspiciatis</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CollectionSection;
