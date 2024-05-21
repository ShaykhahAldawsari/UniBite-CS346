import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="m-4">
        <Routes>
          <Route path="/" element={<h1>Welcome to unibite</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
