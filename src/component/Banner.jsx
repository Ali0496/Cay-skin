import "../style/banner.css";
import banner1 from "../image/bg_image (1).png";
import banner2 from "../image/Mask Group (1).png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper section1">
        <div className="banner__content">
          <h2>
            Neque porro quisquam <br />
            est, qui dolorem
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <button>Ingredient glossary</button>
        </div>
        <div className="banner__img">
          <img src={banner1} alt="" />
        </div>
      </div>
      <div className="banner__wrapper section2">
        <div className="banner__content">
          <h5>Our story</h5>
          <h2>Ut enim ad minima</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <button>About Us</button>
        </div>
        <div className="banner__img">
          <img src={banner2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
