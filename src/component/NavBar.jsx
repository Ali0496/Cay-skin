import logo from "../image/Headline.svg";
import "../style/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h4>Free Shipping for all orders over $100</h4>
      <hr />

      <nav>
        <ul className="main__lists">
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
        </ul>
        <img className="logo" src={logo} alt="" />
        <ul className="secondsry__lists">
          <li>Account</li>
          <li>Search</li>
          <li>Card(0)</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
