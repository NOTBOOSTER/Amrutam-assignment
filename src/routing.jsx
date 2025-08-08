import { Navigate, Route, Routes } from "react-router";
import React from "react";
import AffiliateDashboard from "./pages/affiliate/dashboard";
import Commission from "./pages/affiliate/commission";
import SpecialCommission from "./pages/affiliate/SpecialCommission";
import AffiliateCoupons from "./pages/affiliate/Coupons";
import SpecialCoupons from "./pages/affiliate/SpecialCoupons";
import PendingPayment from "./pages/affiliate/PendingPayment";
import PaymentHistory from "./pages/affiliate/PaymentHistory";
import Customization from "./pages/affiliate/Customization";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/affiliate/dashboard" replace />}
      />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/affiliate">
        <Route path="dashboard" element={<AffiliateDashboard />} />
        <Route path="commission">
          <Route index element={<Commission />} />
          <Route path="special-commission" element={<SpecialCommission />} />
        </Route>
        <Route path="coupons">
          <Route index element={<AffiliateCoupons />} />
          <Route path="special-coupons" element={<SpecialCoupons />} />
        </Route>
        <Route path="payment">
          <Route path="pending-payment" element={<PendingPayment />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="*">
            <Route
              index
              element={<Navigate to="/affiliate/payment/pending-payment" />}
            />
          </Route>
        </Route>
      </Route>
      <Route path="/customization">
      <Route path="app" element={<Customization />} />
      <Route index element={<Navigate to="/customization/app" />} />
      </Route>
    </Routes>
  );
};

export default Routing;
