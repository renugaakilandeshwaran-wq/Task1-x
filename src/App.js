import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import "./pages/Hotels.css"
import HotelDetails from "./pages/HotelDetails";
import "./pages/HotelDetails.css"
import Services from "./pages/Services";
import "./pages/Services.css"
import Spa from "./pages/Spa";
import "./pages/Spa.css"
import Restaurant from "./pages/Restaurant";
import "./pages/Restaurant.css"
import Pool from "./pages/Pool";
import "./pages/Pool.css"
import About from "./pages/About";
import "./styles/About.css"
import Contact from "./pages/Contact";
import "./pages/Contact.css"
import Footer from "./components/Footer";
import "./components/Footer.css"
import "./components/SearchBar.css"
import "./App.css";
import Dashboard from "./pages/Dashboard";
import "./assets/logo.png";
import Gallery from "./pages/Gallery";
import "./pages/Gallery.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/hotels"
              element={<Hotels />}
            />

            <Route
              path="/hotel/:id"
              element={<HotelDetails />}
            />

            <Route
              path="/services"
              element={<Services />}
            >
              <Route
                path="spa"
                element={<Spa />}
              />

              <Route
                path="restaurant"
                element={<Restaurant />}
              />

              <Route
                path="pool"
                element={<Pool />}
              />
            </Route>

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/gallery"
              element={<Gallery />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
