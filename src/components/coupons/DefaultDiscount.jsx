import React, { useState } from "react";

const DefaultDiscount = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <div className="flex flex-col gap-3 mt-6">
      {/**/}
      <div className="flex justify-between my-2 items-center">
        <h2 className="font-medium text-[#333448] text-md">Default Coupons</h2>
        <div
          className={`relative inline-flex h-5 w-11 items-center rounded-full transition-colors cursor-pointer mr-5 border border-[#3A643B] ${
            isToggled ? "bg-white" : "bg-gray-200"
          }`}
          onClick={() => setIsToggled(!isToggled)}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full transition-transform border- ${
              isToggled
                ? "translate-x-6 bg-[#3A643B]"
                : "translate-x-0.5 bg-gray-400"
            }`}
          ></span>
        </div>
      </div>
      <div className="bg-white rounded-xl w-full shadow-sm/4 px-6 py-8 flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-8">
          <div className="flex justify-between gap-3">
            {/*Product Name*/}
            <div className="w-full relative">
              <select
                id="product"
                className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
                disabled={!isToggled}
              >
                <option value="">Please select a product</option>
              </select>
              <label
                htmlFor="product"
                className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
              >
                Product Name
                <span className="text-red-500 pl-1">*</span>
              </label>
            </div>

            {/*Doctor Name*/}
            <div className="w-full relative">
              <select
                id="doctor"
                className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
                disabled={!isToggled}
              >
                <option value="">Please select a doctor</option>
              </select>
              <label
                htmlFor="doctor"
                className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
              >
                Doctor Name
                <span className="text-red-500 pl-1">*</span>
              </label>
            </div>
          </div>
          <div className="flex justify-between gap-3">
            {/*Usage Limit*/}
            <div className="w-full relative">
              <select
                id="limit"
                className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
                disabled={!isToggled}
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
                Usage Limit
                <span className="text-red-500 pl-1">*</span>
              </label>
            </div>

            {/*precentage*/}
            <div className="w-full relative">
              <select
                id="Percentage"
                placeholder="Please select a Percentage"
                className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
                disabled={!isToggled}
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
        </div>
        <div className="flex justify-end ">
          <button className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultDiscount;
