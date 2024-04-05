import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashbord/Dashboard";
import Home from "./pages/homepage/Home";
import HomeCards from "./components/HomeCards";
import Profile from "./pages/profile/Profile";
import NftGallery from "./pages/gallery/NftGallery";
import Tokens from "./pages/tokens/Tokens";

// import { About, Home } from "./pages/index";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/NFTGallery" element={<NftGallery />} />
          <Route path="/Tokens" element={<Tokens />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
