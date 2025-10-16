import { FaBell, FaRegCommentAlt, FaSearch, FaBars } from "react-icons/fa";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="bg-primary text-softWhite flex justify-between items-center px-6 py-3 shadow rounded-b-2xl">
      <div className="flex items-center gap-3 w-1/2">
        {/* Tombol menu (hanya tampil di tablet/HP) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-primary/80 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-softWhite"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg px-4 py-2 w-full text-grayDark outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div className="flex items-center gap-6 text-sm">
        <span>Thursday, 16 October</span>
        <button className="bg-accent px-3 py-2 rounded-lg text-softWhite hover:opacity-90">
          🔔
        </button>
      </div>
    </header>
  );
}
