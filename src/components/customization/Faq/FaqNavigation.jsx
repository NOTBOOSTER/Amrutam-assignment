import React from "react";

const FaqNavigation = ({ activeFaq, setActiveFaq }) => {
  return (
    <div className="h-16 rounded-2xl overflow-hidden bg-white w-auto shadow-sm/2 flex justify-evenly items-center text-gray-500 font-medium">
      <div
        onClick={() => setActiveFaq("consumer")}
        className={`cursor-pointer ${
          activeFaq === "consumer"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        Consumer
      </div>
      <div
        onClick={() => setActiveFaq("doctor")}
        className={`cursor-pointer ${
          activeFaq === "doctor"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        Doctor
      </div>
    </div>
  );
};

export default FaqNavigation;
