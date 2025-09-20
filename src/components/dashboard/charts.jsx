import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

export default function Charts() {
  const publicationProgressData = {
    datasets: [
      {
        data: [75.55, 24.45],
        backgroundColor: ["#6366f1", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const publicationProgressOption = {
    cutout: "75%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  const pieData = {
    labels: ["Intern", "Karyawan"],
    datasets: [
      {
        data: [119, 128],
        backgroundColor: ["#34d399", "#6366f1"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: [["Electrical Engineer"], ["Mechanical Engineer"], ["Machine Assembler"], ["CAD Design"], ["Warehouse Staff"]],
    datasets: [
      {
        label: "2023",
        data: [8, 12, 4, 9, 6],
        backgroundColor: "#fcd34d",
      },
      {
        label: "2024",
        data: [10, 15, 6, 12, 8],
        backgroundColor: "#6ee7b7",
      },
      {
        label: "2025",
        data: [12, 14, 7, 10, 5],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  return (
    <div className="pb-9 px-8 pt-2 font-inter">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Product Publication Progress</h3>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xs text-gray-500">This Quarter</p>
            <div className="w-6 h-1 bg-cyan-400 rounded-full shadow-sm"></div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-48">
              <Doughnut data={publicationProgressData} options={publicationProgressOption} />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center">
              <p className="text-2xl font-bold text-gray-800">75.55%</p>
              <span className="text-red-500 bg-red-100 px-2 py-0.5 rounded-full text-sm mt-1">-15</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            You have published <span className="font-semibold">35 Machine</span> this Month
          </p>
          <div className="flex justify-around mt-6 text-center text-sm">
            <div>
              <p className="text-gray-500">Target Publish</p>
              <p className="font-bold text-gray-800 text-xl mt-1">50 pcs</p>
            </div>
            <div>
              <p className="text-gray-500">On Website</p>
              <p className="font-bold text-gray-800 text-xl mt-1">35 pcs</p>
            </div>
            <div>
              <p className="text-gray-500">Draft Product</p>
              <p className="font-bold text-gray-800 text-xl mt-1">15 pcs</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg item-center">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Applicant Graph</h3>
          <div className="flex items-center mb-4">
            <div className="w-8 h-[3px] bg-cyan-400 rounded-sm shadow-sm"></div>
            <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
          </div>
          <div className="relative py-9">
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <Doughnut
                  data={pieData}
                  options={{
                    cutout: "60%",
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: true },
                    },
                  }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-2xl font-bold text-gray-800">247</p>
                </div>
                <div className="absolute top-8 -left-4">
                  <div className="absolute -left-12 -top-2">
                    <p className="text-xs text-gray-600">Employee</p>
                    <p className="text-xl font-bold text-indigo-500">128</p>
                  </div>
                </div>
                <div className="absolute bottom-8 -right-1">
                  <div className="absolute -right-16 top-4">
                    <p className="text-xs text-gray-600">Internship</p>
                    <p className="text-xl font-bold text-green-400">119</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Employee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Internship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-sm font-semibold mb-2">Career Graph</h3>
          <div className="flex items-center mb-4">
            <div className="w-8 h-[3px] bg-cyan-400 rounded-sm shadow-sm"></div>
            <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
          </div>
          <div className="w-full h-64 mt-10">
            <Bar
              data={barData}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      font: {
                        family: "Inter", // <-- atur font Inter
                      },
                    },
                  },
                  tooltip: {
                    enabled: true,
                    bodyFont: { family: "Inter" }, // tooltip isi
                    titleFont: { family: "Inter" }, // tooltip judul
                  },
                },
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 5,
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 12,
                      },
                      callback: function (value, index) {
                        const label = this.getLabelForValue(index);
                        return Array.isArray(label) ? label.join("\n") : label;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
