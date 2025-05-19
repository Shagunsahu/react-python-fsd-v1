import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#E6E0F8",
        fontFamily: "Inter, sans-serif",
        color: "#0F172A",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Hero onUploadClick={() => navigate("/upload")} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
