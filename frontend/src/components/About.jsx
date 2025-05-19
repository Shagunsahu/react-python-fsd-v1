import React from "react";

const About = () => (
  <section
    id="about"
    style={{
      backgroundColor: "#D8D1F2",
      padding: "3rem 2rem",
      maxWidth: 700,
      margin: "2rem auto",
      borderRadius: 8,
      textAlign: "center",
    }}
  >
    <h2>About This Tool</h2>
    <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>
      This tool allows you to upload your resume and automatically extracts your key skills using
      advanced PDF text extraction and keyword-based natural language processing. It’s fast,
      reliable, and easy to use.
    </p>
  </section>
);

export default About;
