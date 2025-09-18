import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Applicants from "./pages/applicants";
import JobListing from "./pages/joblisting";
import Users from "./pages/users";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Sidebar />

        <div className="w-full h-full flex-1 pl-[255px]">
          <div data-aos="fade-up">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/applicants" element={<Applicants />} />
              <Route path="/joblisting" element={<JobListing />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
