import React from "react";
import image from "../../assets/nav-admin.jpg";
import arrowup from "../../assets/affiliate/arrow-up.svg";
// import arrowdown from "../../assets/affiliate/arrow-down.svg";

const TopAffiliateDoctors = () => {
  return (
    <div className="w-full">
      <div className="font-medium text-[#333448]"> Top Affiliate Doctors</div>
      <div className="flex flex-col bg-white mt-4 border border-[#E2E2E2] rounded-xl shadow-sm/4 px-4 py-6 gap-6 ">
      <div className="h-9 flex items-center justify-between">
        <div className="flex p-2 items-center gap-3">
          <h3 className="text-[#333448] font-medium">1.</h3>
          <img src={image} alt="doctor" className="h-9 w-9 rounded-full" />
          <div className="">
            <h3 className="text-[#333448] font-medium text-sm">Dr. John Doe</h3>
            <h3 className="text-[#33354880] font-medium text-sm">Speciality + 2 others</h3>
          </div>
        </div>
        <div className="bg-[#ABE9CA] py-1 px-2 rounded-sm flex items-center text-[#15C26B] text-sm w-15 justify-between h-6">
          <img src={arrowup} alt="arrow up" className="w-2.5 h-2.5" />
          <h3 className="text-xs">+1%</h3>
        </div>
      </div>
      <div className="h-9 flex items-center justify-between">
        <div className="flex p-2 items-center gap-3">
          <h3 className="text-[#333448] font-medium">1.</h3>
          <img src={image} alt="doctor" className="h-9 w-9 rounded-full" />
          <div className="">
            <h3 className="text-[#333448] font-medium text-sm">Dr. John Doe</h3>
            <h3 className="text-[#33354880] font-medium text-sm">Speciality + 2 others</h3>
          </div>
        </div>
        <div className="bg-[#ABE9CA] py-1 px-2 rounded-sm flex items-center text-[#15C26B] text-sm w-15 justify-between h-6">
          <img src={arrowup} alt="arrow up" className="w-2.5 h-2.5" />
          <h3 className="text-xs">+1%</h3>
        </div>
      </div>
      <div className="h-9 flex items-center justify-between">
        <div className="flex p-2 items-center gap-3">
          <h3 className="text-[#333448] font-medium">1.</h3>
          <img src={image} alt="doctor" className="h-9 w-9 rounded-full" />
          <div className="">
            <h3 className="text-[#333448] font-medium text-sm">Dr. John Doe</h3>
            <h3 className="text-[#33354880] font-medium text-sm">Speciality + 2 others</h3>
          </div>
        </div>
        <div className="bg-[#ABE9CA] py-1 px-2 rounded-sm flex items-center text-[#15C26B] text-sm w-15 justify-between h-6">
          <img src={arrowup} alt="arrow up" className="w-2.5 h-2.5" />
          <h3 className="text-xs">+1%</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopAffiliateDoctors;
