import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Home">
      <h2>Homepage</h2>
      <div className="p1">
        <p>
          This is a personal inventory. It's created to solve a bunch of small
          inconveniences that I have encountered in my life as someone who
          really wants to be on top of things but needs help.
        </p>
        <p>This is that help.</p>
      </div>
      <div className="p2">
        <p>Some of the little issues it's designed to solve:</p>
        <ul>
          <li className="true">
            Store washing information and materials from clothes so that I can
            cut the tags worry free. Including extra info like if the dye stains
            or if it gets super wrinkly.
          </li>

          <li className="true">
            Store the date of purchase so that I know how long I've had
            something.
          </li>
          <li className="true">
            Store all the purchase info; price, brand, shop; because I'm a bit
            obsesive.
          </li>
          <li className="true">
            Store last wash for household items; think curtains, pillows,
            duvets, couch covers; so that I know when they're due for the next
            wash. TBA
          </li>
        </ul>
      </div>
      <div className="p3">
        <ul>
          <li>
            Once my inventory is set, the sorting functionality will help me to:
          </li>
          <li className="true">
            Sort by how much I like something. That way, I can start
            decluttering the things I like the least. Or be ruthless and only
            keep the things I love.
          </li>
          <li className="true">
            Sort by if the items are in the mending/project pile and see what
            the project entails. That way I could choose a project depending on
            the time I have. And I wouldn't just forget about that bag at the
            back of the closet!
          </li>
          <li className="true">
            Sort by season. That way I could check if I really need another
            summer dress when I find a cute one off season. TBA
          </li>
          <li>There are pretty much endless posibilities!</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            I've also created tables for books and appliances, for similar
            reasons. But there hasn't been time to implement the frontend for
            those.
          </li>
        </ul>
      </div>
      <p></p>
    </div>
  );
}
