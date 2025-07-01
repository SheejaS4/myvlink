import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTasks,
  FaComments,
  FaChartBar,
  FaProjectDiagram,
  FaStream,
  FaVideo,
  FaCogs,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const topMenu = [
  { name: "Task", icon: <FaTasks />, to: "/dashboard/task" },
  { name: "Live Chat", icon: <FaComments />, to: "/dashboard/chat" },
  { name: "PowerBI", icon: <FaChartBar />, to: "/dashboard/powerbi" },
  { name: "Workspace", icon: <FaProjectDiagram />, to: "/dashboard/workspace" },
  { name: "Pipelines", icon: <FaStream />, to: "/dashboard/pipelines" },
  { name: "Meet", icon: <FaVideo />, to: "/dashboard/meet" },
];

const bottomMenu = [
  { name: "Settings", icon: <FaCogs />, to: "/dashboard/settings" },
  { name: "Logout", icon: <FaSignOutAlt />, to: "/logout" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#1e293b] text-white flex flex-col justify-between transition-all duration-300 z-40
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo and Collapse/Expand Button */}
      <div
        className={`flex ${
          collapsed ? "flex-col items-center gap-3" : "flex-row items-center justify-between"
        } px-4 py-4 transition-all duration-300 relative`}
      >
        <img
          src={logo}
          alt="Company Logo"
          className={`w-10 h-10 object-contain rounded-full transition-all duration-300`}
        />
        <button
          className={`text-white focus:outline-none transition-all duration-300 ${
            collapsed ? "" : "ml-auto"
          }`}
          style={collapsed ? { marginTop: "0.25rem" } : {}}
          onClick={() => setCollapsed((c) => !c)}
          aria-label="Toggle sidebar"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
      {/* Top Menu */}
      <nav className="flex-1 flex flex-col gap-1 mt-2">
        {topMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer
              ${
                isActive
                  ? "bg-[#334155]"
                  : "hover:bg-[#334155]/80"
              }
              ${collapsed ? "justify-center px-0" : ""}`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      {/* Bottom Menu */}
      <div className="flex flex-col gap-1 mb-4">
        {bottomMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer
              ${
                isActive
                  ? "bg-[#334155]"
                  : "hover:bg-[#334155]/80"
              }
              ${collapsed ? "justify-center px-0" : ""}`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}