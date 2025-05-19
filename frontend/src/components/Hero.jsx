import React from "react";

const Hero = ({ onUploadClick }) => (
  <section
    style={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "4rem 2rem",
      textAlign: "center",
      maxWidth: 700,
      margin: "auto",
    }}
  >
    <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "3rem" }}>
      Upload Your Resume & Instantly Extract Skills
    </h1>
    <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
      Quickly identify your key skills from your resume document. Supports PDF and text files.
    </p>
    <button style={uploadButtonStyle} onClick={onUploadClick}>
      Upload Resume
    </button>
  </section>
);

const uploadButtonStyle = {
  marginTop: "2rem",
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  fontWeight: "700",
  borderRadius: 8,
  border: "none",
  backgroundColor: "#1E40AF",
  color: "white",
  cursor: "pointer",
};

export default Hero;
