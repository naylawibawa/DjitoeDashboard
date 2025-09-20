import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

export default function ProductCards() {
  return (
    <div className="pt-12 px-8 font-inter">
      <h1 className="text-2xl font-semibold text-indigo-300 mb-8 mt-1">Products Administration</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="w-10 h-10 rounded-full bg-indigo-100 border-4 border-indigo-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Pre-Order Products</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">100</h2>
            <span className="text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded-full">Entering</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="w-10 h-10 rounded-full bg-blue-100 border-4 border-blue-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Pre-Order Making Products</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">50</h2>
            <span className="text-xs text-blue-700 font-semibold bg-blue-100 px-2 py-0.5 rounded-full">Entering</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="w-10 h-10 rounded-full bg-orange-100 border-4 border-orange-50"></div>
          <p className="mt-5 text-sm font-semibold text-gray-600">Total Pre-Order Packing Products</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-2xl font-bold text-gray-800">50</h2>
            <span className="text-xs text-orange-600 font-semibold bg-orange-100 px-2 py-0.5 rounded-full">Entering</span>
          </div>
        </div>
      </div>
    </div>
  );
}
