const CustomizationNavigation = ({ changeTab, activeTab }) => {
  return (
    <div className="h-16 m-2 rounded-2xl overflow-hidden bg-white w-auto shadow-sm flex justify-start gap-8 px-6 items-center text-gray-500 font-medium">
      <div
        onClick={() => changeTab("banners")}
        className={`cursor-pointer ${
          activeTab === "banners"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        Banners
      </div>
      <div
        onClick={() => changeTab("products")}
        className={`cursor-pointer ${
          activeTab === "products"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        Per Page Products
      </div>
      <div
        onClick={() => changeTab("ingredients")}
        className={`cursor-pointer ${
          activeTab === "ingredients"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        Ingredients
      </div>
      <div
        onClick={() => changeTab("faq")}
        className={`cursor-pointer ${
          activeTab === "faq"
            ? "text-[#28643B] underline underline-offset-8 decoration-2"
            : "text-[#9999A3]"
        }`}
      >
        FAQ
      </div>
    </div>
  );
};

export default CustomizationNavigation;
