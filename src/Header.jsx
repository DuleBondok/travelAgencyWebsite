import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="mainHeaderDiv">
        <div className="logoDiv">
          <img src="./public/airplane.png" className="airplaneImage"></img>
          <div className="logoHeaderDiv">
            <h1 className="mainHeaderText">TravelBuddy</h1>
            <h1 className="mainHeaderParagraph">
              Your chance to travel the world!
            </h1>
          </div>
        </div>
        <div className="destinationsDiv">
          <h1 className="destinationHeader">EUROPEAN CAPITALS</h1>
          <h1 className="destinationHeader">SPRING 2025</h1>
          <h1 className="destinationHeader">SUMMER 2025</h1>
        </div>
        <div className="shoppingCartDiv">
          <Link to="/home">
            <h1 className="homeBtn">HOME</h1>
          </Link>
          <img src="/shopping.png" className="shoppingImg"></img>
        </div>
      </div>
    </>
  );
}

export default Header;
