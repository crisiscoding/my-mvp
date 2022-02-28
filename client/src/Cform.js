//adapted from Jim's Portfolio AdminView

import React, { useState } from "react";
import "./Cform.css";

const EMPTY_FORM = {
  picture: "",
  extra_pic: "",
  closet_section: "",
  date_purchase: "",
  price: "",
  shop: "",
  brand: "",
  season: "",
  new_or_not: "",
  ready_to_use: "",
  materials: "",
  wash_sched: "",
  wash_info: "",
  feeling: "",
  upgrade: "",
  notes: "",
};

function Cform(props) {
  const [item, setItem] = useState(EMPTY_FORM); //item of clothing
  const [preview, setPreview] = useState(""); //preview of picture

  const handlePreview = (e) => {
    //for pic preview
    const { name, value } = e.target;
    setPreview(() => ({ ...preview, [name]: value }));
  };

  const handleInputChange = (e) => {
    //for all the fields
    const { name, value } = e.target;

    setItem((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //sends item to App through props.addItem
    e.preventDefault();
    props.addItem(item);
    setItem(EMPTY_FORM);
  };

  return (
    <div className="Cform">
      <img src={preview.picture} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Picture
            <input
              type="text"
              name="picture"
              value={item.picture}
              onChange={handleInputChange}
              onInput={handlePreview}
            />
          </label>
        </div>
        {/* <label> //commented out fields that were cluttering the presentation, but are in the db and might be useful later.
          Extra Picture
          <input
            type="text"
            name="extra_pic"
            value={item.extra_pic}
            onChange={handleInputChange}
          />
        </label> */}
        {/* <div>
          <label>
            Closet Section
            <select
              name="closet_section"
              value={item.closet_section}
              onChange={handleInputChange}
            >
              {" "}
              <option value="home">Home</option>
              <option value="clothes">Clothes</option>
            </select>
          </label>
        </div> */}
        <div>
          <label>
            Date of Purchase
            <input
              type="text"
              name="date_purchase"
              value={item.date_purchase}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={handleInputChange}
            />{" "}
            €
          </label>
          <label>
            <select
              name="new_or_not"
              value={item.new_or_not}
              onChange={handleInputChange}
            >
              {" "}
              <option value="0">New</option>
              <option value="1">Second hand</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Shop
            <input
              type="text"
              name="shop"
              value={item.shop}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Brand
            <input
              type="text"
              name="brand"
              value={item.brand}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Season
            <select
              name="season"
              value={item.season}
              onChange={handleInputChange}
            >
              {" "}
              <option value="all">All</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Ready or project pile/taylor?
            <select
              name="ready_to_use"
              value={item.ready_to_use}
              onChange={handleInputChange}
            >
              {" "}
              <option value="0">Ready</option>
              <option value="1">Project</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Materials
            <input
              type="text"
              name="materials"
              value={item.materials}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Washing schedule
            <input
              type="text"
              name="wash_sched"
              value={item.wash_sched}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Wash Info
            <input
              type="text"
              name="wash_info"
              value={item.wash_info}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            How much do I like it?
            <select
              name="feeling"
              value={item.feeling}
              onChange={handleInputChange}
            >
              {" "}
              <option value="4">Love!</option>
              <option value="3">like</option>
              <option value="2">It's ok</option>
              <option value="1">meh</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Do I want to upgrade it?
            <select
              name="upgrade"
              value={item.upgrade}
              onChange={handleInputChange}
            >
              {" "}
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Notes:
            <textarea
              name="notes"
              value={item.notes}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </label>
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Cform;
