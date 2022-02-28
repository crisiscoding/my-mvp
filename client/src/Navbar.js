import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        <ul>
          <li>
            <a href="/Add">+ Add new item</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Clothes">Clothes</a>
          </li>
          <li>
            <a href="/Home">Books</a>
          </li>
          <li>
            <a href="/FeatItem">Featured Dummy</a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
