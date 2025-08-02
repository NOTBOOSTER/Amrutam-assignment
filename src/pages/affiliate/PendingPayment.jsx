import searchicon from "../../assets/commission/search.svg";
import plusicon from "../../assets/commission/plus.svg";
import refershicon from "../../assets/commission/refresh.svg";
import downloadicon from "../../assets/commission/download.svg";
import previous from "../../assets/commission/previous-page.svg";
import next from "../../assets/commission/next-page.svg";
import filter from "../../assets/commission/filter.svg";

const PendingPayment = () => {
  const tableData = [
    {
      id: 1,
      doctorName: "Isabel Wiza",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      doctorName: "Sourmya Maheswari",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "5,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 3,
      doctorName: "Margie O'Rilley",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 4,
      doctorName: "Lucas Legros",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 5,
      doctorName: "Shanelle Ziemann",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "5,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 6,
      doctorName: "William Stephan",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "5,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 7,
      doctorName: "Smith Birkin",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "5,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg/4 my-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-lg font-medium text-black">
            Pending Payment Request
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="pl-7 pr-4 py-2 bg-[#2E37A40D] rounded-xl text-sm font-medium w-64 placeholder-[#28643B80] focus:outline-none focus:ring-1 focus:ring-transparent focus:border-transparent"
            />
            <img
              src={searchicon}
              alt="Search Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={plusicon} className="text-gray-600" />
          </button>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={refershicon} className="text-gray-600" />
          </button>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={filter} className="text-gray-600" />
          </button>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={downloadicon} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-medium text-black text-sm">
                <input type="checkbox" className="mr-2" />
              </th>
              <th className="text-left py-3 px-4 font-medium text-black text-sm">
                Doctor Name
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Email-id
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Mobile
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Amount Withdrawal
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Requested Date
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Wallet Amount
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Details
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Approval
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                index={index}
                className="border-t-2 border-gray-100"
              >
                <td className="py-4 px-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={row.avatar}
                      alt={row.doctorName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-black">{row.doctorName}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.email}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.mobile}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.amountWithdrawal}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.requestedDate}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.walletAmount}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-green-600 text-sm">View All</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center space-x-2">
                    <button className="text-green-600 text-sm">Accept</button>
                    <button className="text-red-600 text-sm">Decline</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-gray-500">Rows per page: 7</span>
        <div className="flex items-center space-x-2">
          <button className="p-1">
            <img src={previous} className="text-gray-600" />
          </button>
          <span className="px-3 py-1 bg-gray-100 rounded text-sm text-black">
            1
          </span>
          <button className="p-1">
            <img src={next} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingPayment;
