import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "bootswatch/dist/lux/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import "./App.css";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import BookingCalendar from "./pages/Dashboard Pages/BookingCalendar";
import Dashboard from "./pages/Dashboard Pages/Dashboard";
import Rooms from "./pages/Dashboard Pages/Rooms";
import GalleryPage from "./pages/Dashboard Pages/GalleryPage";
import Packages from "./pages/Dashboard Pages/Packages";
import Users from "./pages/Dashboard Pages/Users";
import Bookings from "./pages/Dashboard Pages/Bookings";
import Loader from "./components/Loader/Loader";
import CusBookingForm from "./components/CusBookingForm/CusBookingForm";
import { Section } from "lucide-react";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookingCalendar" element={<BookingCalendar />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/users" element={<Users />} />

          <Route path="/cusBooking" element={<CusBookingForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
