import React from "react";
import arrowup from "../../assets/affiliate/arrow-up.svg";
import arrowdown from "../../assets/affiliate/arrow-down.svg";

const TopAffiliateDoctors = ({doctors}) => {
  console.log(doctors);
  return (
    <div className="w-full">
      <div className="font-medium text-[#333448]"> Top Affiliate Doctors</div>
      <div className="flex flex-col bg-white mt-4 border border-[#E2E2E2] rounded-xl shadow-sm/4 px-4 py-6 gap-6 ">
      {doctors.map((doctor, index) => (
        <div key={index} className="h-9 flex items-center justify-between">
        <div className="flex p-2 items-center gap-3">
          <h3 className="text-[#333448] font-medium">{index + 1}.</h3>
          <img src={doctor.image} alt="doctor" className="h-9 w-9 rounded-full" />
          <div className="">
            <h3 className="text-[#333448] font-medium text-sm">{doctor.name}</h3>
            <h3 className="text-[#33354880] font-medium text-sm">{doctor.specialization.length === 1 ? doctor.specialization : doctor.specialization[0] + " + " + (doctor.specialization.length - 1) + " Others" }</h3>
          </div>
        </div>
        {doctor.percentChange < 0 ? (
          <div className="bg-[#FFD2D2] py-1 px-2 rounded-sm flex items-center text-[#FF0000] text-sm w-auto justify-between h-6">
            <img src={arrowdown} alt="arrow down" className="w-2.5 h-2.5" />
            <h3 className="text-xs">{doctor.percentChange}%</h3>
          </div>
        ) : (
          <div className="bg-[#ABE9CA] py-1 px-2 rounded-sm flex items-center text-[#15C26B] text-sm w-auto justify-between h-6">
            <img src={arrowup} alt="arrow up" className="w-2.5 h-2.5" />
            <h3 className="text-xs">{doctor.percentChange}%</h3>
          </div>
        )}
      </div>
))}
      </div>
    </div>
  );
};

export default TopAffiliateDoctors;
