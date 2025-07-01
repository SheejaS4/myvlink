import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Task');

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      <Sidebar active={activeMenu} setActive={setActiveMenu} />

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-semibold mb-8">Welcome to the Dashboard</h1>

        <div className="border-2 border-dashed border-slate-500 p-10 rounded-lg">
          <h2 className="text-xl font-bold text-center mb-2">Placeholder for Charts/Cards</h2>
          <p className="text-center text-sm text-gray-300">
            This section will display charts and cards in the future.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
