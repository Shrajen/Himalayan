import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

import Order from "../pages/order/Order";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-page" element={<Order />} />
    </Routes>
  );
};

export default Allroutes;
