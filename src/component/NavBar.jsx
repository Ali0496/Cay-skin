import { NavLink, useLocation } from "react-router-dom";
import logo from "../image/Headline.svg";
import "../style/navbar.css";
import { useRef } from "react";

function NavBar() {
  const modalRef = useRef();
  const cardModalRef = useRef();

  const { pathname } = useLocation();

  const openModal = () => {
    modalRef.current.classList.add("show__modal");
  };

  const closeModal = () => {
    modalRef.current.classList.remove("show__modal");
  };

  const openCardModal = () => {
    cardModalRef.current.classList.add("show__card__modal");
  };

  const removeCardMOdal = () => {
    cardModalRef.current.classList.remove("show__card__modal");
  };

  const isWhiteNavbar = pathname === "/" || pathname === "/collection";

  console.log("isWhiteNavbar:", isWhiteNavbar);
  console.log("Current Path:", pathname);
  console.log(
    "Navbar Color Class:",
    isWhiteNavbar ? "navbar__white" : "navbar__black"
  );

  return (
    <div
      className={`navbar ${isWhiteNavbar ? "navbar__white" : "navbar__black"}`}
      data-theme="dark"
    >
      <div className="container">
        <h4>Free Shipping for all orders over $100</h4>
        <hr />
        <nav>
          <li onClick={openModal} className="menu">
            Menu
          </li>
          <div className="menu__modal" ref={modalRef}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/product">About</NavLink>
            </li>

            <span onClick={closeModal}>x</span>
          </div>
          <ul className="main__lists">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/product">About</NavLink>
            </li>
          </ul>
          <NavLink to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <ul className="secondsry__lists">
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/card">Card(0)</NavLink>
            </li>
          </ul>
          <div ref={cardModalRef} className="card__modal">
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/card">Card(0)</NavLink>
            </li>
            <span onClick={removeCardMOdal}>x</span>
          </div>
          <li className="card" onClick={openCardModal}>
            Card(0)
          </li>
        </nav>{" "}
      </div>
    </div>
  );
}

export default NavBar;
