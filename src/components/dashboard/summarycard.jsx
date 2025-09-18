import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

export default function SummaryCards() {
  return (
    <div className="pt-12 px-8 font-inter">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-indigo-100 border-4 border-indigo-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Products Sold</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">100</h2>
            <span className="text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">stock</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-green-100 border-4 border-green-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Employees</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">150</h2>
            <span className="text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">all employees</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-pink-100 border-4 border-pink-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Applicants</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">247</h2>
            <span className="text-xs text-gray-600 font-semibold bg-gray-100 px-2 py-0.5 rounded-full">draft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
