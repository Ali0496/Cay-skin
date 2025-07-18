import logo from "../image/Headline.svg";
import "../style/navbar.css";
import { useRef } from "react";

function NavBar() {
  const modalRef = useRef();
  const cardModalRef = useRef();

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
  return (
    <div className="navbar">
      <div className="container">
        <h4>Free Shipping for all orders over $100</h4>
        <hr />
        <nav>
          <li onClick={openModal} className="menu">
            Menu
          </li>
          <div className="menu__modal" ref={modalRef}>
            <li>Home</li>
            <li>Collection</li>
            <li>About</li>
            <span onClick={closeModal}>x</span>
          </div>
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
          <div ref={cardModalRef} className="card__modal">
            <li>Account</li>
            <li>Search</li>
            <li>Card(0)</li>
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
