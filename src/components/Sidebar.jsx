import { useState } from "react";
import {
  FaHome,
  FaShoppingBag,
  FaMoneyBillWave,
  FaChartBar,
  FaStore,
  FaTags,
  FaBiking,
  FaFileAlt,
  FaEnvelope,
  FaInfoCircle,
} from "react-icons/fa";

const mainMenu = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "Orders", icon: <FaShoppingBag /> },
  {
    label: "E-commerce",
    icon: <FaShoppingBag />,
    subMenu: [{ label: "Product List" }, { label: "Categories" }],
  },
  { label: "Transactions", icon: <FaMoneyBillWave /> },
  { label: "Reports", icon: <FaChartBar /> },
  {
    label: "Vendor Management",
    icon: <FaStore />,
    subMenu: [{ label: "Vendor List" }, { label: "Add Vendor" }],
  },
  {
    label: "Promotions",
    icon: <FaTags />,
    subMenu: [{ label: "Promo List" }, { label: "Add Promo" }],
  },
  {
    label: "Riders Management",
    icon: <FaBiking />,
    subMenu: [{ label: "Rider List" }, { label: "Add Rider" }],
  },
  { label: "Pages", icon: <FaFileAlt /> },
  { label: "Contact", icon: <FaEnvelope /> },
  { label: "About", icon: <FaInfoCircle /> },
];

export default function Sidebar({ user }) {
  const [active, setActive] = useState("");
  const [openMenu, setOpenMenu] = useState("");

  // Akun dropdown state
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <aside className="w-70 h-full bg-white text-gray-700 flex flex-col p-4 shadow-lg rounded-2xl">
      <div className="mb-6 flex items-center">
        <h1 className="text-2xl font-bold text-green-700">
          Javan Cipta Solusi
        </h1>
      </div>
      {/* Garis pemisah horizontal */}
      <hr className="border-t border-gray-300 mb-2" />
      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
        {mainMenu.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => {
                setActive(item.label);
                if (item.subMenu)
                  setOpenMenu(openMenu === item.label ? "" : item.label);
              }}
              className={`flex justify-between items-center w-full gap-3 px-3 py-2 rounded-lg text-left transition-all 
                ${
                  active === item.label
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
            >
              <span className="flex gap-2 items-center">
                <span className="text-[16px]">{item.icon}</span>
                {item.label}
              </span>
              {item.subMenu && (
                <span>{openMenu === item.label ? "-" : "+"}</span>
              )}
            </button>
            {/* SubMenu */}
            {item.subMenu && openMenu === item.label && (
              <div className="ml-8 mt-2 flex flex-col gap-1">
                {item.subMenu.map((sub) => (
                  <button
                    key={sub.label}
                    onClick={() => setActive(sub.label)}
                    className={`text-sm text-gray-600 p-1 px-2 rounded hover:bg-gray-200 
                      ${
                        active === sub.label ? "bg-green-100 font-semibold" : ""
                      }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      {/* Akun Menu */}
      <div
        className="relative"
        onMouseEnter={() => setAccountOpen(true)}
        onMouseLeave={() => setAccountOpen(false)}
      >
        <button className="flex items-center gap-3 px-2 py-2 w-full rounded-lg bg-orange-600 text-left">
          <img
            src={user.picture.medium}
            alt="avatar"
            className="w-10 h-10 rounded-full border-white border-2"
          />
          <div className="flex-1 text-white">
            <p className="text-sm font-semibold">{`${user.name.first} ${user.name.last}`}</p>
            <p className="text-xs ">{user.email}</p>
          </div>
        </button>
        {/* Dropdown account menu */}
        {accountOpen && (
          <div className="absolute left-0 bottom-[100%] mb-2 bg-white rounded-xl shadow-lg w-full">
            <button className="w-full px-4 py-2 text-left text-orange-600 hover:text-green-900">
              My Profile
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-800 hover:text-green-900">
              My Balance
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-800 hover:text-green-900">
              My Bank
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-800 hover:text-green-900">
              Change Password
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
