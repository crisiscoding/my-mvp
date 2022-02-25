//copied from Jim's Portfolio
import React, { useEffect, useState } from "react";
import "./Cgrid.css";

//just one div with one map function, mapping through items  // it kinda works but
//the dummy data doesn't have id, gives error, even after trying the trick with notes images don't show up
function Cgrid(props) {
  const [filterByFeel, setFilterByFeel] = useState("");

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilterByFeel(e.target.value);
  };
  return (
    <div className="Cgrid">
      <label>
        Select by feeling
        <select value={filterByFeel} onChange={handleFilterChange}>
          {" "}
          <option value="love">Love!</option>
          <option value="like">like</option>
          <option value="ok">It's ok</option>
          <option value="meh">meh</option>
        </select>
      </label>
      <h4>Click on one to see datails...to be developed</h4>
      {props.items
        .filter((item) => {
          if (filterByFeel === "") {
            return item;
          } else {
            return item.season === filterByFeel;
          }
        })
        .map((i) => (
          <div>
            <p>{i.notes} this is it</p>
            <img
              className="Cgrid img"
              key={i.id}
              src={i.picture}
              alt={i.notes}
              onClick={() => props.showItem(i.id)}
            />
          </div>
        ))}
    </div>
  );
}

export default Cgrid;
