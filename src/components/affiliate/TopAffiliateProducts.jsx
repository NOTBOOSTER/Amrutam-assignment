import React from "react";

const TopAffiliateProducts = ({products}) => {
  return (
    <div className="w-full">
      <div className="font-medium text-[#333448]">Top Affiliate Products</div>
      <div className="flex flex-col bg-white mt-4 border border-[#E2E2E2] rounded-xl shadow-sm/4 px-4 py-6 gap-6 ">
      {products.map((product, index)=>(
        <div key={index} className="h-9 flex items-center justify-between">
          <div className="flex p-2 items-center gap-3">
            <h3 className="text-[#333448] font-medium">{index + 1}.</h3>
            <img src={product.image} alt="doctor" className="h-9 w-9 rounded-full" />
            <h3 className="text-[#333448] font-medium text-sm">{product.name}</h3>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TopAffiliateProducts;
