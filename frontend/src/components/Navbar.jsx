import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        backgroundColor: "#2D2D2D",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        fontSize: "1.2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
         Skill Extractor
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button style={navButtonStyle} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </button>
        <button style={navButtonStyle} onClick={() => scrollTo("about")}>
          About
        </button>
        <button style={navButtonStyle} onClick={() => scrollTo("contact")}>
          Contact Us
        </button>
      </div>
    </nav>
  );
};

const navButtonStyle = {
  background: "none",
  border: "none",
  color: "#38BDF8",
  fontSize: "2rem",
  fontWeight: "600",
  cursor: "pointer",
};

export default Navbar;
