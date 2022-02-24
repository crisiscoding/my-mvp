import React, { useState } from "react"; //it wasn't here, strange!
import "./App.css";
import Cform from "./Cform";
import Cgrid from "./Cgrid";
import Homegrid from "./Homegrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
//import { Navbar } from "react-bootstrap";  it gives me a not defined error for navbar and home, this is googled
//import Cgrid from "./Cgrid";
//import Cfeat from "./Cfeat";

//SOFIA
//in the App component, create 3 buttons that render 3 different components: AddNewThing, Closet, Home
//Create a fetch request in the App.js to get everything from clothes_and_lineans and pass the result to the childs (Closet, Home)
//In Closet and Home, filter accordingly and display the data

function App() {
  //all the const for states and functions

  const [items, setItems] = useState(); //idk it had  DefaultItems and DefaultItems[0] for feat
  //const [featItem, setFeatItem] = useState();
  const [error, setError] = useState();
  const handleAddItem = (newItem) => {
    setItems((state) => [...state, newItem]);
  };
  //copied from fetch activity
  async function getItems() {
    let dataURL = `http://localhost5000/clothes`;

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

  //function showItem(id) {
  //let featItem = items.find((p) => p.id === id);
  //setFeatItem(featItem); }
  //put into return once form works:
  //<Cfeat featItem={featItem} />
  //<Cgrid items={items} showItem={(id) => showItem(id)} />;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <p>This is the App/Homepage, I guess.</p>
        <Routes>
          <Route path="/Add">
            <Cform addItem={(newItem) => handleAddItem(newItem)} />
          </Route>
          <Route path="/Homewares">{/*<Homegrid get/>*/}</Route>
          <Route path="/Clothes">{/*<Cgrid />*/}</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
