import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";


import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import ScrollToHash from "./components/ScrollToHash";


const App: React.FC = () => {
  AOS.init();



  return (
    <div className="min-h-screen bg-sand-500 text-slate-800">
      <ScrollManager/>
      <ScrollToHash/>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default App;
