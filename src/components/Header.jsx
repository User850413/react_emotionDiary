import React from "react";
import "./Header.css";

function Header({ title, leftChild, rightChild }) {
  return (
    <header className="Header">
      <div className="header__left">{leftChild}</div>
      <div className="header__center">{title}</div>
      <div className="header__right">{rightChild}</div>
    </header>
  );
}

export default Header;
