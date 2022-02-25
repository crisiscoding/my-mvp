import React, { useEffect, useState } from "react"; //it wasn't here, strange!
import "./App.css";
import Cform from "./Cform";
import Cgrid from "./Cgrid";
import Homepage from "./Homepage";
import Homegrid from "./Homegrid";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import postman_data from "./postman_data";
import Cfeat from "./Cfeat";

//import { Navbar } from "react-bootstrap";  it gives me a not defined error for navbar and home, this is googled
//import Cfeat from "./Cfeat";

//SOFIA
//in the App component, create 3 buttons that render 3 different components: AddNewThing, Closet, Home
//Create a fetch request in the App.js to get everything from clothes_and_lineans and pass the result to the childs (Closet, Home)
//In Closet and Home, filter accordingly and display the data

function App() {
  //all the const for states and functions
  const [items, setItems] = useState([]);

  //idk it had  DefaultItems and DefaultItems[0] for feat
  //const [featItem, setFeatItem] = useState(postman_data[0]);
  const [error, setError] = useState();
  const [featItem, setFeatItem] = useState(postman_data[0]);
  useEffect(() => {
    getItems();
  }, []);

  const handleAddItem = (newItem) => {
    setItems((state) => [...state, newItem]); //fech post db
  };
  //from my miles5, unfinished
  async function addStudent(input) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //data format
      },
      body: JSON.stringify(input),
    };
    let data = null;

    try {
      let response = await fetch("/clothes", options);
      if (response.ok) {
        data = await response.json();
        setItems(data);
      } else {
        console.log("server error:", response.statusText);
      }
    } catch (e) {
      console.log("network error:", e.message);
    }
    return data;
  }
  //copied from meen&holly

  //copied from fetch

  async function getItems() {
    //for grid
    let dataURL = `/clothes`;
    console.log("we are here");
    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setItems(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }

  function showItem(id) {
    console.log("here", id);
    let featItem = items.find((p) => p.id === id);
    console.log(featItem);
    setFeatItem(featItem);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Add"
            element={<Cform addItem={(newItem) => handleAddItem(newItem)} />}
          />
          <Route path="/FeatItem" element={<Cfeat featItem={featItem} />} />
          <Route path="/Homewares" element={<Homegrid items={items} />} />
          <Route
            path="/Clothes"
            element={<Cgrid items={items} showItem={(id) => showItem(id)} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
