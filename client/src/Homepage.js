import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
      <div>
        <p>
          This is a personal inventory. It's created to solve a bunch of small
          inconveniences that I have encountered in my life as someone who
          really wants to be on top of things but needs help. This is that help.
        </p>
        <p>Some of the little issues it's designed to solve:</p>
        <ul>
          <li>
            Store washing information and materials from clothes so that I can
            cut the tags worry free. Including extra info like if the dye stains
            or if it gets super wrinkly.
          </li>
          <li>
            Store last wash for household items; think curtains, pillows,
            duvets, couch covers; so that I know when they're due for the next
            wash. TBA
          </li>

          <li>
            Store the date of purchase so that I know how long I've had
            something.
          </li>
          <li>
            Store all the purchase info; price, brand, shop; because I'm a bit
            obsesive.
          </li>
        </ul>
        <p>
          Once my little inventory is set, the sorting functionality will help
          me to:
        </p>
        <ul>
          <li>
            Sort by how much I like something. Think Marie Kondo style. I could
            start decluttering the things I like the least. Or be ruthless and
            only keep the things I love.
          </li>
          <li>
            Sort by if the items are in the mending/project pile and see what
            the project entails. That way I could choose a project depending on
            the time I have. And I wouldn't just forget about that bag at the
            back of the closet!
          </li>
          <li>
            Sort by season. That way I could check if I really need another
            summer dress when I find a cute one off season.{" "}
          </li>
        </ul>
        <p>There are pretty much endless posibilities!</p>
      </div>
      <div>
        <p>
          I've also created tables for books and appliances, for similar
          reasons. But there hasn't been time to implement the frontend for
          those.
        </p>
      </div>
      <p></p>
    </div>
  );
}
