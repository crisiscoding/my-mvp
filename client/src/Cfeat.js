import React, { useEffect, useState } from "react";
import "./Cfeat.css";
import postman_data from "./postman_data";
import { useParams } from "react-router-dom";

export default function Cfeat() {
  const [featItem, setFeatItem] = useState(postman_data[0]);
  const [error, setError] = useState();
  let { id } = useParams();
  useEffect(() => {
    showItem();
  }, []);

  async function showItem() {
    let dataURL = `/clothes/${id}`;
    console.log("inside cfeat.showItem", dataURL);
    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setFeatItem(data[0]);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }
  let fi = featItem;
  return (
    <div className="FeaturedItem">
      <img src={featItem.picture} alt={featItem.notes} />
      <ul>
        {/*         <li> Section: {featItem.closet_section}</li>
         */}{" "}
        <li>Date of purchase: {featItem.date_purchase}</li>
        <li>Price: {featItem.price}€</li>
        <li>{featItem.new_or_not ? "Second hand" : "New"}</li>
        <li>Shop: {featItem.shop}</li>
        <li>Brand: {featItem.brand}</li>
        <li>Season: {featItem.season}</li>
        <li>{featItem.ready_to_use ? "Project" : "Ready to use"}</li>
        <li>Materials: {featItem.materials} 100%</li>
        <li>Washing Schedule: {featItem.wash_sched}</li>
        <li>Washing Info: {featItem.wash_info}</li>
        <li>
          {featItem.feeling === 4
            ? "I love it! <3"
            : featItem.feeling === 3
            ? "I like it. :)"
            : featItem.feeling === 2
            ? "It's ok."
            : "Meh :/"}
        </li>
        <li>{featItem.upgrade ? "I want to upgrade it." : ""}</li>
        <li>{featItem.notes}</li>
      </ul>
    </div>
  );
}
