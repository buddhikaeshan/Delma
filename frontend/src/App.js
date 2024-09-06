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
import CusBookingForm from "./components/CusBookingForm/CusBookingForm";
import UserBookingCalender from './pages/UserDashboard/UserBookingCalender';
import UserBooking from './pages/UserDashboard/UserBookings';
import UserPackages from './pages/UserDashboard/UserPackages';
import UserRooms from './pages/UserDashboard/UserRooms';
import Login from "./pages/Login/Login";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cusBooking" element={<CusBookingForm />} />

          {/*admin */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
          <Route path="/rooms" element={<ProtectedRoute element={<Rooms />} isAuthenticated={isAuthenticated} />} />
          <Route path="/bookingCalendar" element={<ProtectedRoute element={<BookingCalendar />} isAuthenticated={isAuthenticated} />} />
          <Route path="/bookings" element={<ProtectedRoute element={<Bookings />} isAuthenticated={isAuthenticated} />} />
          <Route path="/packages" element={<ProtectedRoute element={<Packages />} isAuthenticated={isAuthenticated} />} />
          <Route path="/galleryPage" element={<ProtectedRoute element={<GalleryPage />} isAuthenticated={isAuthenticated} />} />
          <Route path="/users" element={<ProtectedRoute element={<Users />} isAuthenticated={isAuthenticated} />} />

          {/* User */}
          <Route path="/dashboardUser" element={<ProtectedRoute element={<UserBookingCalender />} isAuthenticated={isAuthenticated} />} />
          <Route path="/bookingUser" element={<ProtectedRoute element={<UserBooking />} isAuthenticated={isAuthenticated} />} />
          <Route path="/packagesUser" element={<ProtectedRoute element={<UserPackages />} isAuthenticated={isAuthenticated} />} />
          <Route path="/roomsUser" element={<ProtectedRoute element={<UserRooms />} isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;