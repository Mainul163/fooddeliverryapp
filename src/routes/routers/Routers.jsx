import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./../../pages/home/Home";
import AllFoods from "./../../pages/allfoods/AllFoods";
import FoodDetails from "./../../pages/foodDetails/FoodDetails";
import Cart from "../../pages/cart/Cart";
import CheckOut from "../../pages/checkout/CheckOut";
import Login from "./../../pages/login/Login";
import Register from "./../../pages/register/Register";
import Contact from "../../pages/contact/Contact";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
