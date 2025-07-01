// src/pages/Dashboard.jsx
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:ml-64 ml-20 transition-all duration-300">
        <h1 className="text-3xl font-bold text-white mb-8 mt-12 md:mt-0 text-center">
          Welcome to the Dashboard
        </h1>
        <div className="border-2 border-dashed border-gray-500 rounded-lg bg-[#1e293b] p-10 w-full max-w-xl flex flex-col items-center">
          <span className="text-lg text-white font-semibold mb-2">
            Placeholder for Charts/Cards
          </span>
          <span className="text-gray-400 text-center">
            This area will display your analytics, charts, and quick stats.
          </span>
        </div>
      </main>
    </div>
  );
}