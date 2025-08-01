import { useState } from "react";
import submenuopen from "../assets/sidebar/submenu-open.svg";
import submenuclose from "../assets/sidebar/submenu-close.svg";
import iconone from "../assets/sidebar/menu-icon-1.svg";
import icontwo from "../assets/sidebar/menu-icon-2.svg";
import iconthree from "../assets/sidebar/menu-icon-3.svg";
import iconfour from "../assets/sidebar/menu-icon-4.svg";
import iconfive from "../assets/sidebar/menu-icon-5.svg";
import iconsix from "../assets/sidebar/menu-icon-6.svg";
import iconseven from "../assets/sidebar/menu-icon-7.svg";
import iconeight from "../assets/sidebar/menu-icon-8.svg";
import { NavLink, useLocation } from "react-router";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    affiliate: true,
    payment: false,
  });

  const location = useLocation();
  const currentPath = location.pathname;
  console.log("Current Path:", currentPath.split("/")[1]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="h-auto w-60 bg-white mt-3 rounded-e-3xl min-h-screen shadow-lg shadow-[#2E37A40D]">
      <h2 className="pl-5 pt-3  font-medium text-sm text-[#333333]">Main</h2>
      <nav className="space-y-1">
        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconone} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Dashboard</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={icontwo} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Doctors</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconthree} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Patients</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconfour} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Appointments</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconfive} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Speciality</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconsix} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Coupons</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconseven} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Concerns</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 text-[#333548BF] hover:bg-gray-50  rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img src={iconeight} alt="Dashboard Icon" className="w-5 h-5" />
            </div>
            <span className="text-sm font-normal">Referral</span>
          </div>
          <div className="w-2 h-2">
            <img
              src={submenuopen}
              alt="submenu open icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div
          className={`flex items-center justify-between px-3 py-2.5  hover:bg-gray-50  rounded-md cursor-pointer group ${
            expandedSections.affiliate ? "text-[#28643B]" : "text-[#333548BF]"
          }`}
          onClick={() => toggleSection("affiliate")}
        >
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 text-gray-500 bg-[#3A643B0D] flex items-center justify-center rounded-md">
              <img
                src={iconeight}
                alt="Dashboard Icon"
                className="w-5 h-5"
                style={{
                  filter:
                    expandedSections.affiliate === true
                      ? "invert(24%) sepia(29%) saturate(1753%) hue-rotate(88deg) brightness(95%) contrast(89%)"
                      : "invert(50%)",
                }}
              />
            </div>
            <span className="text-sm font-normal">Affiliate</span>
          </div>
          <div className="w-2 h-2">
            {expandedSections.affiliate ? (
              <img
                src={submenuclose}
                alt="submenu open icon"
                className="w-full h-full"
              />
            ) : (
              <img
                src={submenuopen}
                alt="submenu closed icon"
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {expandedSections.affiliate && (
          <div className="rounded-md mx-3 mb-1">
            <div className="py-1 space-y-0">
              <div className="px-4 py-1 text-sm hover:bg-gray-50 cursor-pointer rounded ml-6">
                <NavLink
                  to="/affiliate/dashboard"
                  className={
                    currentPath.includes("affiliate/dashboard")
                      ? "text-[#28643B]"
                      : "text-[#333548BF]"
                  }
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="px-4 py-1 text-sm hover:bg-gray-50 cursor-pointer rounded ml-6">
                <NavLink
                  to="/affiliate/commission"
                  className={
                    currentPath.includes("affiliate/commission")
                      ? "text-[#28643B]"
                      : "text-[#333548BF]"
                }
                >
                  Commission
                </NavLink>
              </div>
              <div className="px-4 py-1 text-sm hover:bg-gray-50 cursor-pointer rounded ml-6">
                <NavLink
                  to="/affiliate/coupons"
                  className={
                    currentPath.includes("affiliate/coupons")
                      ? "text-[#28643B]"
                      : "text-[#333548BF]"
                  }
                >
                  Coupons
                </NavLink>
              </div>

              <div className="space-y-0">
                <NavLink
                  to="/affiliate/payment/pending-payment"
                  className={`flex items-center pl-5 gap-3 px-4 py-1 text-sm ${
                    currentPath.includes("affiliate/payment")
                      ? "text-[#28643B]"
                      : "text-[#333548BF]"
                  } hover:bg-gray-50 cursor-pointer rounded`}
                  onClick={() => toggleSection("payment")}
                >
                  {expandedSections.payment ? (
                    <img
                      src={submenuclose}
                      alt="submenu open icon"
                      className="w-2 h-2"
                    />
                  ) : (
                    <img
                      src={submenuopen}
                      alt="submenu closed icon"
                      className="w-2 h-2"
                    />
                  )}
                  <span>Payment</span>
                </NavLink>

                {expandedSections.payment && (
                  <div className="ml-6 space-y-0">
                    <div className="py-1 text-sm  hover:bg-gray-50 cursor-pointer pl-6 rounded-sm">
                    <NavLink to="/affiliate/payment/pending-payment"
                      className={
                        currentPath.includes(
                          "affiliate/payment/pending-payment"
                        )
                          ? "text-[#28643B]"
                          : "text-[#333548BF]"
                      }
                    >
                      Pending Payment
                    </NavLink>
                    </div>
                    <div className="py-1 text-sm  hover:bg-gray-50 cursor-pointer pl-6 rounded-sm">
                    <NavLink to="/affiliate/payment/pending-history"
                      className={
                        currentPath.includes(
                          "affiliate/payment/pending-history"
                        )
                          ? "text-[#28643B]"
                          : "text-[#333548BF]"
                      }
                    >
                      Payment History
                    </NavLink>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-4 py-2 text-sm text-[#333548BF] hover:bg-gray-50 cursor-pointer rounded ml-6">
                Doctors
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
