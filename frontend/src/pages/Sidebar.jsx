// ✅ src/pages/Sidebar.jsx
import React, { useState } from 'react';
import {
  FaTasks,
  FaComments,
  FaChartBar,
  FaProjectDiagram,
  FaStream,
  FaVideo,
  FaCogs,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = ({ active, setActive }) => {
  const topMenu = [
    { label: 'Task', icon: <FaTasks /> },
    { label: 'Live Chat', icon: <FaComments /> },
    { label: 'PowerBI', icon: <FaChartBar /> },
    { label: 'Workspace', icon: <FaProjectDiagram /> },
    { label: 'Pipelines', icon: <FaStream /> },
    { label: 'Meet', icon: <FaVideo /> },
  ];

  return (
    <div className="bg-[#1e293b] text-white h-screen w-64 flex flex-col justify-between p-4">
      <div>
        {topMenu.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer mb-2 hover:bg-[#334155] transition ${
              active === item.label ? 'bg-[#334155]' : ''
            }`}
            onClick={() => setActive(item.label)}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer hover:bg-[#334155] transition">
          <FaCogs />
          <span className="text-sm">Settings</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer hover:bg-[#334155] transition mt-2">
          <FaSignOutAlt />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;