//adapted from Jim's Portfolio AdminView

import React, { useState } from "react";
import "./Cform.css";
//a lot of stuff here about react router that I don't remember

const EMPTY_FORM = {
  picture: "",
  extra_pic: "",
  closet_section: "",
  date_purchase: "",
  price: null,
  shop: "",
  brand: "",
  season: "",
  new_or_not: null,
  ready_to_use: null,
  materials: "",
  wash_sched: "",
  wash_info: "",
  feeling: null,
  upgrade: null,
  notes: "",
};

function Cform(props) {
  //-----states and functions
  const [item, setItem] = useState(EMPTY_FORM); //item of clothing

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // const { name, value } = event.target;

    setItem((state) => ({
      //I have the feeling this should work for anything but unsure
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addItem(item);
    // don't forget to accept the props in the arguments of the function AdminView
    setItem(EMPTY_FORM);
  };
  //-------
  return (
    <div className="Cform">
      <h2>Add New Item of Clothing</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Main Picture *
          <input
            type="text"
            name="pic"
            value={item.picture}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Extra Picture
          <input
            type="text"
            name="extra pic"
            value={item.extra_pic}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Closet Section *
          <input
            type="text"
            name="closet_section"
            value={item.closet_section}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Date of Purchase *
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
            type="number??????"
            name="price"
            value={item.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Shop where you bought it
          <input
            type="text"
            name="shop"
            value={item.price}
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
          Season you'll wear it the most *
          <input
            type="text"
            name="season"
            value={item.season}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Is it new or second hand? *
          <input
            type="text"
            name="new_or_not"
            value={item.new_or_not}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Is it ready to wear or going to the project pile/taylor? *
          <input
            type="text"
            name="ready_to_use"
            value={item.ready_to_use}
            onChange={handleInputChange}
          />
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
          Does it have a washing schedule?
          <input
            type="text"
            name="wash_sched"
            value={item.wash_sched}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Wash Info, like temperature, etc.
          <input
            type="text"
            name="wash_info"
            value={item.wash_info}
            onChange={handleInputChange}
          />
        </label>
        <label>
          How much do you like it? Does it spark joy?
          <input
            type="text"
            name="feeling"
            value={item.feeling}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Do you want to upgrade it?
          <input
            type="text"
            name="upgrade"
            value={item.upgrade}
            onChange={(e) => handleInputChange(e)}
          />
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
