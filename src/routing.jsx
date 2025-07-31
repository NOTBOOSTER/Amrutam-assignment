import { Navigate, Route, Routes } from "react-router";
import React from "react";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/affiliate/dashboard" replace />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/affiliate">
        <Route path="dashboard" element={<div>dashboard</div>} />
      </Route>
    </Routes>
  );
};

export default Routing;
