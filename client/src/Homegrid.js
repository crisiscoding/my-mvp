//copied from Cgrid, the idea is to substitute for books!!!!

import React, { useEffect, useState } from "react";
import "./Homegrid.css";

function Homegrid(props) {
  console.log(props.books, "inside Homegrid");

  return (
    <div className="Books">
      {props.books.map((i) => (
        <div key={i.id}>
          <img
            className="Books img"
            src={i.picture}
            /* alt={i.title} */
            /* onClick={() => props.showItem(i.id)} */
          />
          <p>{i.title}</p>
          <p>{i.author}</p>
          <p>{i.genre}</p>
          <p>{i.publisher}</p>
          <p>{i.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Homegrid;
