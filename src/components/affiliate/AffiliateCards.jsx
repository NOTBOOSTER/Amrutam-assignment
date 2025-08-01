import calendericon from "../../assets/affiliate/calender.svg";
import ordersicon from "../../assets/affiliate/orders.svg";
import walleticon from "../../assets/affiliate/empty-wallet.svg";
import profileicon from "../../assets/affiliate/profile.svg";

const AffiliateCards = () => {
  return (
    <div className="flex m-2 gap-3 my-5">
      <div className="h-auto bg-white border border-[#E2E2E2] rounded-xl w-full shadow-sm/4 flex-col flex p-6 justify-between  gap-2">
        <h3 className="text-[#333448] font-medium"> Total Coupons clicks</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-center rounded-xl bg-[#FDF8E5] w-11 h-11 border border-[#E3E3E3] my-4">
            <img src={calendericon} alt="coupons clicks" />
          </div>
          <div className="flex items-center ">
            <h1 className="px-2 text-[#3A643B] font-semibold text-4xl">255</h1>
            <div className="flex flex-col h-full justify-end items-end pb-5">
              <span className="text-[#7D7D7D] text-sm">/month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-white border border-[#E2E2E2] rounded-xl w-full shadow-sm/4 flex-col flex p-6 justify-between  gap-2">
        <h3 className="text-[#333448] font-medium">Total Orders</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-center rounded-xl bg-[#FDF8E5] w-11 h-11 border border-[#E3E3E3] my-4">
            <img src={ordersicon} alt="coupons clicks" />
          </div>
          <div className="flex items-center ">
            <h1 className="px-2 text-[#3A643B] font-semibold text-4xl">255</h1>
            <div className="flex flex-col h-full justify-end items-end pb-5">
              <span className="text-[#7D7D7D] text-sm">/month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-white border border-[#E2E2E2] rounded-xl w-full shadow-sm/4 flex-col flex p-6 justify-between  gap-2">
        <h3 className="text-[#333448] font-medium">Total Revenue</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-center rounded-xl bg-[#FDF8E5] w-11 h-11 border border-[#E3E3E3] my-4">
            <img src={walleticon} alt="coupons clicks" />
          </div>
          <div className="flex items-center ">
            <h1 className="px-2 text-[#3A643B] font-semibold text-4xl">255</h1>
            <div className="flex flex-col h-full justify-end items-end pb-5">
              <span className="text-[#7D7D7D] text-sm">/month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-white border border-[#E2E2E2] rounded-xl w-full shadow-sm/4 flex-col flex p-6 justify-between  gap-2">
        <h3 className="text-[#333448] font-medium">Total Doctors</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-center rounded-xl bg-[#FDF8E5] w-11 h-11 border border-[#E3E3E3] my-4">
            <img src={profileicon} alt="coupons clicks" />
          </div>
          <div className="flex items-center ">
            <h1 className="px-2 text-[#3A643B] font-semibold text-4xl">255</h1>
            <div className="flex flex-col h-full justify-end items-end pb-5">
              <span className="text-[#7D7D7D] text-sm">/month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCards;
