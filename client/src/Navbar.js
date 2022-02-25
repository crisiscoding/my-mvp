import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="link">
        <ul>
          <li>
            <a href="/Add">Add new item</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Clothes">Clothes</a>
          </li>
          <li>
            <a href="/Home">Homewares</a>
          </li>
          <li>
            <a href="/FeatItem">Featured Dummy</a>
          </li>
          <li>
            {" "}
            Sort by feeling
            <select>
              {" "}
              <option value="spring">Love</option>
              <option value="summer">Like</option>
              <option value="fall">It's ok</option>
              <option value="winter">meh</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
