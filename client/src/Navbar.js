import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/FeatItem/0">Featured</a>
          </li>
          <li>
            <a href="/Clothes">Clothes</a>
          </li>
          <li>
            <a href="/Add">+ Add</a>
          </li>
          <li>
            <a href="/Books">Books</a>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
