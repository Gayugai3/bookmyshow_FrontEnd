import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./sb-admin-2.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Portal from "./pages/Portal";
import Dashboard from "./admin_components/Dashboard";

import Movies from "./pages/Movies";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Addmovie from "./pages/Addmovie";
import Editmovie from "./pages/Editmovie";
import Moviedetail from "./pages/Moviedetail";
import Theatre from "./pages/Theatre";
import Shows from "./pages/Shows";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import Query from "./pages/Query";
import Register from "./login_component/Register";
import Login from "./login_component/Login";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import ForgetPassword from "./login_component/Forgotpassword";
import Verification from "./login_component/Verification";
import ChangePassword from "./login_component/ChangePassword";
import ViewDetails from "./user_pages/ViewDetails";
import ViewTrailer from "./user_pages/ViewTrailer";
import MainPage from "./user_pages/MainPage";
import Allmovies from "./user_pages/Allmovies";
import Contact from "./user_pages/ContactForm";
import AuthPage from "./login_component/AuthPage";
import Mybookings from "./user_pages/Mybookings";
import SelectSeats from "./user_pages/SelectSeats";
import MovieTrailer from "./pages/MovieTrailer";
import Seatbooking from "./user_pages/Seatbooking";
import PrintTicket from "./user_pages/PrintTicket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/mainpage" element={<MainPage />}>
              <Route path="viewdetails/:id" element={<ViewDetails />} />
              <Route path="viewtrailer/:id" element={<ViewTrailer />} />
              <Route path="movies/allmovies" element={<Allmovies />} />
              <Route path="contact" element={<Contact />} />
              <Route path="mybookings" element={<Mybookings />} />
              <Route path="seatbooking" element={<Seatbooking />} />
              <Route path="printticket" element={<PrintTicket />} />
            </Route>

            {/* Routes for login & register page */}
            <Route path="/auth" element={<AuthPage />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotpassword" element={<ForgetPassword />} />
              <Route path="verification" element={<Verification />} />
              <Route path="changepassword" element={<ChangePassword />} />
            </Route>

            {/* Routes for admin portal */}
            <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="movies" element={<Movies />} />
              <Route path="addmovie" element={<Addmovie />} />
              <Route path="editmovie/:id" element={<Editmovie />} />
              <Route path="moviedetail/:id" element={<Moviedetail />} />
              <Route path="movietrailer/:id" element={<MovieTrailer />} />
              <Route path="theatres" element={<Theatre />} />
              <Route path="shows" element={<Shows />} />
              <Route path="users" element={<Users />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="query" element={<Query />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
