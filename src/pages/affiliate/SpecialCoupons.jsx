import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";
import { apiUrl } from "../../data.js";

const SpecialCoupons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const product = useRef();
  const percentage = useRef();
  const limit = useRef();
  const doctor = useRef();

  const fetchDoctorsAndProducts = async () => {
    try {
      const response = await fetch(apiUrl + "/affiliate/doctorsandproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDoctorsAndProducts();
  }, []);

  if (isLoading) return <Loader />;

  const handleNewSpecialCoupons = () => {
    if (
      product.current.value &&
      percentage.current.value &&
      limit.current.value &&
      doctor.current.value
    ) {
      const newSpecialCoupon = {
        productId: product.current.value,
        percentage: parseInt(percentage.current.value),
        limit: parseInt(limit.current.value),
        doctorId: doctor.current.value,
      };
      fetch(apiUrl + "/affiliate/coupons/specialcoupons/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSpecialCoupon),
      });
      navigate("/affiliate/coupons");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-6 mx-2">
      <h2 className="font-medium text-[#333448] text-md">Add Special Coupon</h2>
      <div className="bg-white rounded-xl w-full shadow-sm/4 px-6 py-8 flex flex-col gap-8">
        <div className="flex justify-between gap-3">
          <div className="w-full relative">
            <select
              id="product"
              ref={product}
              placeholder="Please select a Percentage"
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please Select a Product</option>
              {data.products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="product"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Product
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="limit"
              ref={limit}
              placeholder="Please select a Percentage"
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please select a Limit</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label
              htmlFor="Percentage"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Limit
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="w-full relative">
            <select
              id="doctor"
              ref={doctor}
              placeholder="Please select a Percentage"
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please Select a Doctor</option>
              {data.doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="doctor"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Doctor
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="Percentage"
              ref={percentage}
              placeholder="Please select a Percentage"
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please select a Percentage</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
              <option value="100">100%</option>
            </select>
            <label
              htmlFor="Percentage"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Percentage
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end ">
          <button onClick={handleNewSpecialCoupons} className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCoupons;
