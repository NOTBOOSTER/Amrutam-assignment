import { Navigate, Route, Routes } from "react-router";
import React from "react";
import AffiliateDashboard from "./pages/affiliate/dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/affiliate/dashboard" replace />} />
      {/* i wanna add star(a route to  redirect to affiliate dashboard) route */}
      <Route path="/about" element={<div>About</div>} />
      <Route path="/affiliate">
        <Route path="dashboard" element={<AffiliateDashboard />} />
      </Route>
    </Routes>
  );
};

export default Routing;
