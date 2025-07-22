import "../style/cream.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import nproduct1 from "../image/product1.png";
import product2 from "../image/productImg2.png";
import product3 from "../image/image 9 (1).png";
import coll1 from "../image/Mask Group (2).png";
import coll2 from "../image/Mask Group.png";
import affrim from "../image/affrim.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Cream() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="cream">
      <div className="container">
        <div className="top">
          <span className="xira">Home /</span>
          <span className="xira">Best Seller /</span>
          <span className="not__xira">Universal Mineral Face Lotion SPF55</span>
        </div>
        <div className="cream__wrapper">
          <div className="slider-wrapper">
            <div
              style={{
                display: "flex",
                height: "600px", // Fixed container height
                width: "100%",
                gap: "20px", // Space between thumbnails and main image
              }}
            >
              {/* Vertical Thumbnails - Left Side */}
              <div
                style={{
                  width: "120px", // Thumbnail column width
                  height: "100%",
                }}
              >
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={false}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  style={{ height: "100%" }}
                >
                  {[nproduct1, product2, product3, coll1, coll2].map(
                    (img, index) => (
                      <SwiperSlide key={index} style={{ height: "25%" }}>
                        <div
                          style={{
                            height: "100%",
                            paddingBottom: "10px", // Space between thumbnails
                          }}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>

              {/* Main Image - Right Side */}
              <div
                style={{
                  flex: 1,
                  height: "100%",
                  position: "relative",
                }}
              >
                <Swiper
                  direction="vertical"
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  style={{ height: "100%" }}
                >
                  {[nproduct1, product2, product3, coll1, coll2].map(
                    (img, index) => (
                      <SwiperSlide key={index}>
                        <div
                          style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#f8f8f8",
                          }}
                        >
                          <img
                            src={img}
                            alt={`Product view ${index + 1}`}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="cream__content">
            <h2>Niche Beauty CCC Cream – Niche Beauty</h2>
            <h3>$28.00 $32.00</h3>
            <p>
              <span>
                The original, weightless, scentless sunscreen with SPF 55 that
                leaves a shinny finish.
              </span>
              Formulated with the most sensitive and vulnerable in mind, with a
              custom blend of natural, gentle and hydrating island ingredients
              mixed with the most effective skincare-grade actives.
            </p>
            <div className="size__btn">
              <span className="size__btn1">Size</span>
              <span className="size__btn2">50ml</span>
            </div>
            <div className="size__btn0">
              <button className="size__btn3">1.7 fl oz</button>
              <button className="size__btn4">2.5 fl oz</button>
              <button className="size__btn4">3.4 fl oz</button>
            </div>
            <div className="radio1">
              <input id="check1" type="checkbox"></input>
              <span>$28.00 One time purchase</span>
            </div>
            <div className="radio1">
              <input id="check2" type="checkbox"></input>
              <span>
                $25.99 Subscribe and save. <NavLink>Details</NavLink>
              </span>
            </div>
            <div className="addCard">
              <div className="addToCard">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <button className="add">Add to cart - $28.00</button>
            </div>

            <div className="start__cream">
              <span>
                Starting at $20/mo with <img src={affrim} alt="" />{" "}
                <NavLink>Learn more</NavLink>
              </span>
            </div>
            <h5>
              Use Instruction <span>+</span>
            </h5>
            <h5>
              Ingredients <span>+</span>
            </h5>
            <h5>
              Shipping and Returns <span>+</span>
            </h5>
            <h5>
              How to Recycle <span>+</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cream;
