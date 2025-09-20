import { createPortal } from "react-dom";

export default function UserDeleteModal({ isOpen, user, onClose, onConfirm }) {
  if (!isOpen || !user) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 font-inter">
      <div className="relative bg-white rounded-xl p-6 w-96 text-center shadow-lg">
        <button className="p-1 absolute top-3 right-3 text-gray-500 hover:bg-gray-100 rounded-lg" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-xl font-semibold text-indigo-400 mb-4">Delete User</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete the user <b>{user.user}</b> position? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button className="px-6 py-1 bg-red-200 text-red-700 hover:bg-red-300 rounded-lg" onClick={onClose}>
            No
          </button>
          <button className="px-6 py-1 bg-green-200 text-green-700 hover:bg-green-300 rounded-lg" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
