import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutUs from './views/aboutUs';
import logo from './logo.svg';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/modal" element={<Modal />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/clientlogin" element={<ClientLogin />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/eventplanner" element={<EventPlanner />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/home" element={<Home />} />


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
