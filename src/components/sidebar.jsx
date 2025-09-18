import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CompanyLogo from "../assets/CompanyLogo.png";
import UsersPhoto from "../assets/UsersPhoto.jpg";
import DashboardIcon from "../assets/DashboardIcon.png";
import ProductsIcon from "../assets/ProductsIcon.png";
import ApplicantsIcon from "../assets/ApplicantsIcon.png";
import JobListingIcon from "../assets/JobListingIcon.png";
import UsersIcon from "../assets/UsersIcon.png";

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon, path: "/" },
    { name: "Products", icon: ProductsIcon, path: "/products" },
    { name: "Applicants", icon: ApplicantsIcon, path: "/applicants", badge: "9+" },
    { name: "Job Listing", icon: JobListingIcon, path: "/joblisting" },
    { name: "Users", icon: UsersIcon, path: "/users" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r flex flex-col items-center py-6 font-inter">
      <div className="mb-6">
        <img src={CompanyLogo} alt="PT Djitoe Mesindo" className="h-7 mb-7 mt-10" />
      </div>

      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-2">
          <img src={UsersPhoto} alt="User Photo" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-[16px] font-bold mt-2 mb-1 text-indigo-900">WIEDODO NUGRAHA</h2>
        <p className="text-[14px] text-gray-500">Content Manager</p>
      </div>

      <hr className="w-3/4 border-gray-200 mb-4" />

      <nav className="w-full flex flex-col">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path} onClick={() => setActive(item.path)} className={`w-full transition-colors duration-300 ${active === item.path ? "bg-indigo-100" : "hover:bg-indigo-100"}`}>
            <div className="flex items-center justify-between px-10 py-5">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>

              {item.badge && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
