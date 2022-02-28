import React, { useEffect } from "react";
import "./Cfeat.css";

export default function Cfeat(props) {
  <div>Feautured</div>;
  useEffect(() => {}, [props.featItem]);
  console.log(props.featItem, props.featItem.notes, "we got to the component"); //undefined, undefined
  let fi = props.featItem;
  //<button onClick={()=> props.delete(i.id)}>Delete</button>  <button onClick={}>Modify</button>
  return (
    <div className="FeaturedItem">
      <img src={fi.picture} alt={fi.notes} />
      <ul>
        <li> Section: {fi.closet_section}</li>
        <li>Date of purchase: {fi.date_purchase}</li>
        <li>Price: {fi.price}</li>
        <li>Brand: {fi.brand}</li>
        <li>Season: {fi.season}</li>
        <li>New? {fi.new_or_not}</li>
        <li>Ready to use? {fi.ready_to_use}</li>
        <li>Materials: {fi.materials}</li>
        <li>Washing Schedule: {fi.wash_sched}</li>
        <li>Washing Info: {fi.wash_info}</li>
        <li>Feeling: {fi.feeling}</li>
        <li>Upgrade? {fi.upgrade}</li>
        <li>Notes: {fi.notes}</li>
      </ul>
    </div>
  );
}
