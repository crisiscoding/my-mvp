//copied from Cgrid, the idea is to substitute for books!!!!

import React, { useEffect, useState } from "react";
import "./Homegrid.css";

function Homegrid(props) {
  //missing

  return (
    <div className="Homegrid">
      {props.items.map((i) => (
        <div key={i.id}>
          <p>{i.notes}</p>
          <img
            className="Homegrid img"
            src={i.picture}
            alt={i.title}
            onClick={() => props.showItem(i.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Homegrid;
