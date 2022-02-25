//copied from Jim's Portfolio

import React from "react";
import "./Cgrid.css";

//just one div with one map function, mapping through items  // it kinda works but
//the dummy data doesn't have id, gives error, even after trying the trick with notes images don't show up
function Cgrid(props) {
  {
    props.items.map((i) => (!i.id ? (i.id = i.price) : i.id));
  }
  return (
    <div className="Cgrid">
      <h4>Click on one to see datails...to be developed</h4>
      {props.items.map((i) => (
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
