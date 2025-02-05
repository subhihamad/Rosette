import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import ItemsNav from "./components/itemsNav";
import AddPost from "./components/AddPost";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";
import Shopping from "./pages/Shopping";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="items"  element={<ItemsNav/>}>
            <Route index element={<Items />} />
            <Route path="addItem" element={<AddItem />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="orders" element={<Orders />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
