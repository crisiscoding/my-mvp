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
  //-----states and functions
  const [item, setItem] = useState(EMPTY_FORM); //item of clothing

  const handleInputChange = (e) => {
    //this part works
    // const value = e.target.value;
    //const name = e.target.name;
    const { name, value } = e.target; //not sure what that is doing but it's what he uses for several fields

    setItem((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(item); //this had item, newItem, e.... none worked
    setItem(EMPTY_FORM);
  };

  async function addItem() {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    try {
      let response = await fetch("/idk", options);
      if (response.ok) {
        let data = await response.json();
        setItem(data); //not sure about this
      } else {
        console.log(`server error: ${response.status}`);
      }
    } catch (error) {
      console.log(`network error: ${error.message}`);
    }
  }

  //-------
  return (
    <div className="Cform">
      <h2>Add New Item of Clothing</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Main Picture *
          <input
            type="text"
            name="picture"
            value={item.picture}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Extra Picture
          <input
            type="text"
            name="extra_pic"
            value={item.extra_pic}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Closet Section *
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

        <label>
          Date of Purchase
          <input
            type="text"
            name="date_purchase"
            value={item.date_purchase}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Price
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Shop
          <input
            type="text"
            name="shop"
            value={item.shop}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Brand
          <input
            type="text"
            name="brand"
            value={item.brand}
            onChange={handleInputChange}
          />
        </label>
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
        <label>
          Is it new or second hand? *
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
        <label>
          Ready or project pile/taylor? *
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
        <label>
          Materials
          <input
            type="text"
            name="materials"
            value={item.materials}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Washing schedule
          <input
            type="text"
            name="wash_sched"
            value={item.wash_sched}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Wash Info
          <input
            type="text"
            name="wash_info"
            value={item.wash_info}
            onChange={handleInputChange}
          />
        </label>
        <label>
          How much do you like it?
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

        <label>
          Do you want to upgrade it?
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

        <label>
          Any more notes?
          <textarea
            name="notes"
            value={item.notes}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </label>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Cform;
