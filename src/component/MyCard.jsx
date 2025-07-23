import "../style/myCard.css";
import shipping from "../image/Shipping indicator.svg";
import product from "../image/card.png";

import discount from "../image/discount.svg";
function MyCard() {
  return (
    <section className="mycard">
      <div className="container">
        <div className="cardWrapper">
          <h2>My Cart</h2>
          <img className="shipping" src={shipping} alt="" />
          <div className="top__wrapper">
            <div className="toph4">
              <h4>Product</h4>{" "}
            </div>
            <div className="toph5">
              <h4 className="cardh4">Price</h4>
              <h4 className="cardh5">Quantity</h4>
              <h4 className="cardh6">Total</h4>
            </div>
          </div>
          <hr id="hr" />
          <div className="card1">
            <div className="card1__left">
              <img src={product} alt="" />
              <div className="card1__content">
                <h3>Universal mineral face lotion SPF55</h3>
                <p>Size: 1.7 fl oz</p>
                <p>One Time Purchase</p>
                <h5>Remove</h5>
              </div>
            </div>
            <div className="card1__right">
              <h4 className="card14">$28.00</h4>
              <div className="addToCard">
                <button>+</button>
                <span className="card15">0</span>
                <button>-</button>
              </div>
              <h4 className="card16">$28.00</h4>
            </div>
          </div>
          <hr />
          <div className="card1">
            <div className="card1__left">
              <img src={product} alt="" />
              <div className="card1__content">
                <h3>Deepwater Dew Body Serum</h3>
                <p>Size: 3.4 fl oz</p>
                <p>One Time Purchase</p>
                <h5>Remove</h5>
              </div>
            </div>
            <div className="card1__right">
              <h4>$28.00</h4>
              <div className="addToCard">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <h4>$28.00</h4>
            </div>
          </div>
          <hr />
          <div className="card1">
            <div className="card1__left">
              <img src={product} alt="" />
              <div className="card1__content">
                <h3>Isle Glow Face Lotion SPF45</h3>
                <p>Size: 1.5 fl oz</p>
                <p>One Time Purchase</p>
                <h5>Remove</h5>
              </div>
            </div>
            <div className="card1__right">
              <h4>$28.00</h4>
              <div className="addToCard">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <h4>$28.00</h4>
            </div>
          </div>
          <hr />
          <div className="card1">
            <div className="card1__left">
              <img src={product} alt="" />
              <div className="card1__content">
                <h3>Isle Lip Balm SPF30</h3>
                <p>Size: 0.5 fl oz</p>
                <p>(100% OFF)</p>
                <h5>Remove</h5>
              </div>
            </div>
            <div className="card1__right">
              <h4>$28.00</h4>
              <div className="addToCard">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <h4>$28.00</h4>
            </div>
          </div>
          <hr />
          <div className="card__bottom">
            <div className="cardInput">
              <p className="card__bottm">Order Notes</p>{" "}
              <textarea
                name="card__bottm"
                id=""
                placeholder="Type Message..."
              ></textarea>
            </div>
            <div className="checkout">
              <div className="checkout1">
                <h6>Subtotal</h6>
                <h6>$112.00</h6>
              </div>
              <p>Shipping and tax calculated at checkout.</p>
              <div className="checkout2">
                <span>
                  <img src={discount} alt="" />
                  Auto
                </span>
                <span>-$10.00</span>
              </div>
              <div className="checkout3">
                <h4> Total</h4>
                <h4>$102.00</h4>
              </div>
              <button className="add">Secure Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCard;
