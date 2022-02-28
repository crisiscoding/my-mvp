import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cform from "./Cform";
import Cgrid from "./Cgrid";
import Cfeat from "./Cfeat";
import Homepage from "./Homepage";
import Homegrid from "./Homegrid";
import Navbar from "./Navbar";

function App() {
  const [items, setItems] = useState([]);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getItems();
  }, []);
  useEffect(() => {
    getBooks();
  }, []);

  async function handleAddItem(input) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    let data = null;
    console.log("inside App.handleAddItem");
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

  async function getBooks() {
    let dataURL = `/books`;
    console.log("inside App.getBooks");
    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setBooks(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }

  async function getItems() {
    //it works
    let dataURL = `/clothes`;
    console.log("inside App.getItems");
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
          <Route path="/FeatItem/:id" element={<Cfeat />} />
          <Route path="/Books" element={<Homegrid books={books} />} />
          <Route
            path="/Clothes"
            element={<Cgrid items={items} />}
            
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
