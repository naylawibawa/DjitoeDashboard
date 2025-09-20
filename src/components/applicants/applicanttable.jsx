import { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { applicantData as initialData } from "./applicantdata";

export default function ApplicantTable() {
  const [applicants, setApplicants] = useState(initialData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApplicants = applicants.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(applicants.length / itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getTypeClasses = (type) => {
    switch (type) {
      case "Internship":
        return "bg-gray-100 text-gray-800";
      case "Employee":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800";
      case "Waiting List":
        return "bg-yellow-100 text-yellow-800";
      case "Declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="px-8 py-8 font-inter">
      <h1 className="text-2xl font-semibold text-indigo-300 mb-8 mt-1">Applicants Administration</h1>
      <div className="p-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <p className="px-2">All Applicants</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-10 py-5 font-semibold text-gray-600 text-left">Applicant</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Position</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Type</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Status</th>
                <th className="px-1 font-semibold text-gray-600 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentApplicants.map((applicant, idx) => (
                <tr key={applicant.id} className="border-b">
                  <td className="px-10 py-5 font-bold">{applicant.applicant}</td>
                  <td className="px-10">{applicant.position}</td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getTypeClasses(applicant.type)}`}>{applicant.type}</span>
                  </td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getStatusClasses(applicant.status)}`}>{applicant.status}</span>
                  </td>
                  <td className="px-1">
                    <div className="flex items-center gap-1">
                      <button className="p-1 text-gray-700 hover:bg-gray-100 rounded-lg">
                        <IoIosInformationCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, applicants.length)} of {applicants.length}
          </p>
          <div className="flex gap-1">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="px-2 py-1 border rounded disabled:opacity-50">
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => goToPage(i + 1)} className={`px-2 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}>
                {i + 1}
              </button>
            ))}

            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-2 py-1 border rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
