import React from "react";
import { Link } from "react-router";
import DefaultCoupons from "../../components/coupons/DefaultCoupons";
import DefaultDiscount from "../../components/coupons/DefaultDiscount";
import SpecialCouponsTable from "../../components/coupons/SpecialCouponsTable";


const AffiliateCoupons = () => {
  return (
    <div className="flex flex-col m-3">
      <div className="flex justify-end">
        <Link to="/affiliate/coupons/special-coupons">
          <button className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">
            Add Special Coupon
          </button>
        </Link>
      </div>
      <DefaultCoupons />
      <DefaultDiscount />
      <SpecialCouponsTable />
    </div>
  );
};

export default AffiliateCoupons;
