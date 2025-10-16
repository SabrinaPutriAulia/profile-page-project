// EditButton.jsx
import { FaEdit } from "react-icons/fa";

export function EditButtonOrange({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-orange-500 border-orange-500 border-1 text-white text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-white hover:border-1 hover:border-gray-200 hover:text-gray-700 transition"
      type="button"
    >
      Edit
      <FaEdit className="h-3.5 w-3.5" />
    </button>
  );
}

export function EditButtonGray({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border-gray-200 border-1 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white  transition"
      type="button"
    >
      Edit
      <FaEdit className="h-3.5 w-3.5" />
    </button>
  );
}
