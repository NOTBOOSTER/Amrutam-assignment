import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Today So Far");
  return (
    <div className="h-16 m-2 rounded-2xl overflow-hidden bg-white w-auto shadow-sm/2 flex justify-evenly items-center text-gray-500 font-medium">
      <div
        onClick={() => setActiveTab("Today So Far")}
        className={`cursor-pointer ${
          activeTab === "Today So Far"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : ""
        }`}
      >
        Today So Far
      </div>
      <div
        onClick={() => setActiveTab("Week So Far")}
        className={`cursor-pointer ${
          activeTab === "Week So Far"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : ""
        }`}
      >
        Week So Far
      </div>
      <div
        onClick={() => setActiveTab("Month So Far")}
        className={`cursor-pointer ${
          activeTab === "Month So Far"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : ""
        }`}
      >
        Month So Far
      </div>
      <div
        onClick={() => setActiveTab("Custom")}
        className={`cursor-pointer ${
          activeTab === "Custom"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : ""
        }`}
      >
        Custom
      </div>
    </div>
  );
};

export default TabNavigation;
