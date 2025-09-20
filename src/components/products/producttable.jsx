import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { productData as initialData } from "./productdata";
import ProductStatusModal from "./statusmodal";
import ProductDeleteModal from "./deletemodal";

export default function ProductTable() {
  const [products, setProducts] = useState(initialData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getTypeClasses = (type) => {
    switch (type) {
      case "Making Machine":
        return "bg-blue-100 text-blue-800";
      case "Packing Machine":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "On Hold":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const openModal = (index) => {
    setSelectedIndex(indexOfFirstItem + index);
    setIsModalOpen(true);
  };

  const confirmToggle = () => {
    setProducts((prev) => prev.map((item, i) => (i === selectedIndex ? { ...item, status: item.status === "Active" ? "On Hold" : "Active" } : item)));
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const openDelete = (index) => {
    setSelectedIndex(indexOfFirstItem + index);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((_, i) => i !== selectedIndex));
    setIsDeleteOpen(false);
    setSelectedIndex(null);
  };

  return (
    <div className="px-8 py-8 font-inter">
      <h1 className="text-2xl font-semibold text-indigo-300 mb-8 mt-1">Products On Website</h1>
      <div className="p-6 bg-white shadow-md rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <p className="px-2">All Products</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg text-sm">+ Add New Task</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-10 py-5 font-semibold text-gray-600 text-left">Product Name</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Updated</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Machine Type</th>
                <th className="px-10 font-semibold text-gray-600 text-left">Status</th>
                <th className="px-1 font-semibold text-gray-600 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-10 py-5 font-bold">{product.product}</td>
                  <td className="px-10">{product.updated}</td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getTypeClasses(product.type)}`}>{product.type}</span>
                  </td>
                  <td className="px-10">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getStatusClasses(product.status)}`}>{product.status}</span>
                  </td>
                  <td className="px-1">
                    <div className="flex items-center gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded-lg" onClick={() => openModal(idx)}>
                        {product.status === "On Hold" ? <HiOutlineEyeOff className="w-5 h-5 text-red-600" /> : <HiOutlineEye className="w-5 h-5 text-gray-700" />}
                      </button>
                      <button className="p-1 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => openDelete(idx)}>
                        <HiOutlineTrash className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-gray-700 hover:bg-gray-100 rounded-lg">
                        <HiOutlinePencil className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductStatusModal isOpen={isModalOpen} product={products[selectedIndex]} onClose={() => setIsModalOpen(false)} onConfirm={confirmToggle} />
        <ProductDeleteModal isOpen={isDeleteOpen} product={products[selectedIndex]} onClose={() => setIsDeleteOpen(false)} onConfirm={confirmDelete} />

        <div className="flex justify-between items-center mt-4 text-sm">
          <p>
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)} of {products.length}
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
