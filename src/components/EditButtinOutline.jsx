import { FaEdit } from "react-icons/fa";

export function EditButtonGray({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
      type="button"
    >
      <FaEdit className="h-4 w-4" />
      Edit
    </button>
  );
}
