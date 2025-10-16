import { useEffect, useState } from "react";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import InfoCard from "./components/InfoCard.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading user data...
      </div>
    );

  const personalInfo = [
    { label: "First Name", value: user.name.first },
    { label: "Last Name", value: user.name.last },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Username", value: user.login.username },
    { label: "Gender", value: user.gender },
  ];

  const addressInfo = [
    { label: "Country", value: user.location.country },
    { label: "City", value: user.location.city },
    {
      label: "Street",
      value: `${user.location.street.name} ${user.location.street.number}`,
    },
    { label: "Postal Code", value: user.location.postcode },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white z-40 w-64 transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:relative`}
      >
        <Sidebar user={user} />
      </div>

      {/* Overlay untuk blur background ketika sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Konten utama */}
      <div className="flex-1 flex flex-col pl-0 lg:pl-64">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 pt-6 px-6 space-y-6 text-green-900">
          <h2 className="font-semibold text-xl">My Profile</h2>
          <ProfileCard user={user} />
          <InfoCard
            title="Personal Information"
            data={personalInfo}
            onEdit={() => {}}
          />
          <InfoCard
            title="Address"
            data={addressInfo}
            onEdit={() => {}}
            useGrayButton
          />
        </main>
      </div>
    </div>
  );
}
