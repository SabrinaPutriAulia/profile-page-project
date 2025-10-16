import { FaCamera } from "react-icons/fa";

export default function ProfileCard({ user }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6">
      <div className="relative">
        <img
          src={user?.picture?.large}
          alt="profile"
          className="rounded-full w-30 h-30 object-cover"
        />
        {/* Ikon kamera di sudut kanan bawah foto */}
        <span className="absolute bottom-0 right-0 bg-white text-gray-700 rounded-full p-2 text-xs opacity-90">
          <FaCamera className="h-4 w-4" />
        </span>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-green-800">
          {user?.name?.first} {user?.name?.last}
        </h2>
        <p className="text-sm text-gray-600">Admin</p>
        <p className="text-xs text-gray-500">
          {user?.location?.city}, {user?.location?.country}
        </p>
      </div>
    </div>
  );
}
