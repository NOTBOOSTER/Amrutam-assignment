import searchicon from "../../assets/commission/search.svg";
import plusicon from "../../assets/commission/plus.svg";
import actionicon from "../../assets/commission/action.svg";
import refershicon from "../../assets/commission/refresh.svg";
import downloadicon from "../../assets/commission/download.svg";
import previous from "../../assets/commission/previous-page.svg";
import next from "../../assets/commission/next-page.svg";

const SpecialCouponsTable = () => {
  const tableData = [
    {
      id: 1,
      doctorName: "Alina Mathew",
      usageLimit: "10",
      productName: "Nari Sandariya Malt",
      precentage: "30%",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      doctorName: "Jack Rock",
      usageLimit: "10",
      productName: "Nari Sandariya Malt",
      precentage: "30%",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 3,
      doctorName: "Alina Mathew",
      usageLimit: "10",
      productName: "Nari Sandariya Malt",
      precentage: "30%",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 4,
      doctorName: "Alina Mathew",
      usageLimit: "10",
      productName: "Nari Sandariya Malt",
      precentage: "30%",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c33a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 5,
      doctorName: "Jack Rock",
      usageLimit: "10",
      productName: "Nari Sandariya Malt",
      precentage: "30%",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg/4 my-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-sm font-medium text-black">Special Coupons</h2>
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
        <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
          <img src={downloadicon} className="text-gray-600" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-medium text-black text-sm">
                Doctor Name
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Product Name
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Usage Limit
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Precentage
              </th>
              <th className="text-center py-3 px-4 font-medium text-black text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                index={index}
                className="border-b border-gray-100"
              >
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
                  {row.productName}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.usageLimit}
                </td>
                <td className="py-4 px-4 text-sm text-black text-center">
                  {row.precentage}
                </td>
                <td className="py-4 px-4 text-center">
                  <button>
                    <img src={actionicon} className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-gray-500">Rows per page: 5</span>
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

export default SpecialCouponsTable;
