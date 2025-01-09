import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import ItemsNav from "./components/itemsNav";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="items"  element={<ItemsNav/>}>
            <Route index element={<Items />} />
            <Route path="addItem" element={<AddItem />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
