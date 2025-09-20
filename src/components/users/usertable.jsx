import { useState } from "react";
import { HiTrash, HiPencil } from "react-icons/hi";
import { userData as initialData } from "./userdata";
import UserDeleteModal from "./userdeletemodal";

export default function UserTable() {
  const [users, setUsers] = useState(initialData);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getRoleClasses = (role) => {
    switch (role) {
      case "Super Admin":
        return "bg-gray-100 text-gray-800";
      case "Content Manager":
        return "bg-orange-100 text-orange-800";
      case "Human Resource":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Online":
        return "bg-green-100 text-green-800";
      case "Offline":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const openDelete = (index) => {
    setSelectedIndex(indexOfFirstItem + index);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setUsers((prev) => prev.filter((_, i) => i !== selectedIndex));
    setIsDeleteOpen(false);
    setSelectedIndex(null);
  };

  return (
    <div className="px-8 py-8 font-inter">
      <h1 className="text-2xl font-semibold text-indigo-300 mb-8 mt-1">User Management</h1>
      <div className="p-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <p className="px-2">All Users</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg text-sm">+ Add New Position</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-10 py-5 font-semibold text-gray-600 text-left">Position Name</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Close Date</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Type</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Status</th>
                <th className="px-1 font-semibold text-gray-600 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-10 py-5 font-bold">{user.user}</td>
                  <td className="px-10">{user.lastlogin}</td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getRoleClasses(user.role)}`}>{user.role}</span>
                  </td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getStatusClasses(user.status)}`}>{user.status}</span>
                  </td>
                  <td className="px-1">
                    <div className="flex items-center gap-1">
                      <button className="p-1 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => openDelete(idx)}>
                        <HiTrash className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-gray-700 hover:bg-gray-100 rounded-lg">
                        <HiPencil className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <UserDeleteModal isOpen={isDeleteOpen} user={users[selectedIndex]} onClose={() => setIsDeleteOpen(false)} onConfirm={confirmDelete} />

        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)} of {users.length}
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
