import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Orders from "../pages/Orders";
import PickUpReciept from "../pages/PickUpReciept";
import Reciept from "../pages/Reciept";
import OrderConfirmation from "../pages/OrderConfirmation";
import Homepage from "../pages/Homepage";
import Delivery from "../pages/Delivery";
import Cafes from "../pages/Cafes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="m-4">
        <Routes>
          <Route path="/" element={<Cafes />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/pickp-up-reciept" element={<PickUpReciept />} />
          <Route path="/menus" element={<Homepage />} />

          <Route path="/reciept" element={<Reciept />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
