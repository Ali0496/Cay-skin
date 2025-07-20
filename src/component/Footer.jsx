import "../style/footer.css";
import arrow from "../image/arrow.svg";
import social from "../image/socials.svg";
import footer__icon from "../image/footer-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer_cont">
              <h2>Join the club</h2>
              <p>
                Keep up with our new releases, beauty tips and what Winnie’s
                been up to.
              </p>
              <div className="footer__btn">
                <button>
                  Email Address <img src={arrow} alt="" />
                </button>
              </div>
              <div className="footer__social">
                <img src={social} alt="" />
              </div>
              <div className="footer__copyright1">
                <p>© 2021 Cream Shop</p>
                <p>Terms and conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <hr />
          </div>

          <ul>
            <h5>Shop</h5>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>Universal Mineral</li>
            <li>Isie Glow to Isle</li>
            <li>Deepwater</li>
            <li>Deepwater</li>
            <li>Winne Selects</li>
          </ul>
          <ul>
            <h5>Shop</h5>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>Universal Mineral</li>
            <li>Isie Glow to Isle</li>
            <li>Deepwater</li>
            <li>Deepwater</li>
            <li>Winne Selects</li>
          </ul>
          <ul>
            <h5>Shop</h5>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>Universal Mineral</li>
            <li>Isie Glow to Isle</li>
            <li>Deepwater</li>
            <li>Deepwater</li>
            <li>Winne Selects</li>
          </ul>
          <div className="footer__copyright2">
            <p>© 2021 Cream Shop</p>
            <p>Terms and conditions</p>
            <p>Privacy Policy</p>
          </div>

          <img className="footer__msg__icon" src={footer__icon} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
