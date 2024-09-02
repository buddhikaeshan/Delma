import "bootswatch/dist/lux/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import BookingCalendar from "./pages/Dashboard Pages/BookingCalendar";
import Dashboard from "./pages/Dashboard Pages/Dashboard";
import Rooms from "./pages/Dashboard Pages/Rooms";
import GalleryPage from "./pages/Dashboard Pages/GalleryPage";
import Packages from "./pages/Dashboard Pages/Packages";
import Users from "./pages/Dashboard Pages/Users";
import Bookings from "./pages/Dashboard Pages/Bookings";
import Settings from "./pages/Dashboard Pages/Settings";

function App() {
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
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
