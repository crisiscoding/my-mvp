//copied from Jim's Portfolio
import React, { useEffect, useState } from "react";
import "./Cgrid.css";
import { Link } from "react-router-dom";

function Cgrid(props) {
  const [filterByFeel, setFilterByFeel] = useState(""); //missing useEffect copied from App gave error, back to nothing
  const [filterByProject, setFilterByProject] = useState("");

  const handleFilter1Change = (e) => {
    console.log(e.target.value);
    setFilterByFeel(e.target.value);
    setFilterByProject("");
  };
  const handleFilter2Change = (e) => {
    console.log(e.target.value);
    setFilterByProject(e.target.value);
    setFilterByFeel("");
  };
  console.log(filterByFeel, "this is the filterbyfeel");
  return (
    <div>
      <div className="Searchbar">
        <label>
          Select by feeling
          <select value={filterByFeel} onChange={handleFilter1Change}>
            <option value="4">Love!</option>
            <option value="3">like</option>
            <option value="2">It's ok</option>
            <option value="1">meh</option>
          </select>
        </label>
        <label>
          Find a project
          <select value={filterByProject} onChange={handleFilter2Change}>
            <option value="1">Project</option>
            <option value="0">Ready to use</option>
          </select>
        </label>
      </div>
      <div className="Cgrid">
        {props.items
          .filter((item) => {
            if (filterByFeel === "" && filterByProject === "") {
              /* console.log(item); */
              return item;
            } else if (
              item.feeling === Number(filterByFeel) &&
              filterByProject === ""
            ) {
              return item;
            } else if (
              item.ready_to_use === Number(filterByProject) &&
              filterByFeel === ""
            ) {
              return item;
            } else {
              console.log("other");
            }
          })
          .map((i) => (
            <div key={i.id}>
              <Link to={`/FeatItem/${i.id}`}>
                <img
                  className="Cgrid img"
                  src={i.picture}
                  alt={i.notes}
                  //onClick={() => props.showItem(i)}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cgrid;
//got rid of this <p>{i.notes}</p> before <img>
