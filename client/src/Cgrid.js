//copied from Jim's Portfolio

import React from "react";
import "./Cgrid.css";

//just one div with one map function, mapping through items
function Cgrid(props) {
  return (
    <div className="Cgrid">
      {props.items.map((p) => (
        <img
          key={p.id}
          src={p.image}
          alt={p.title}
          onClick={(e) => props.showItem(p.id)}
        />
      ))}
    </div>
  );
}

export default Cgrid;
