import React from 'react'

const DoctorCommission = () => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      <h2 className="font-medium text-[#333448] text-md">
        Default Doctor Commission
      </h2>
      <div className="bg-white border border-[#E2E2E2] rounded-xl w-full shadow-sm/4 px-6 py-8 flex flex-col gap-8">
        <div className="flex justify-between gap-3">
          <div className="w-full relative">
            <input
              type="text"
              id="doctor"
              placeholder="Applies to all the Doctors"
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            />
            <label
              htmlFor="doctor"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Doctor
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="Percentage"
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
          <button className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCommission