import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const UPLOAD_API_URL = "http://localhost:8000/api/upload-resume";


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSkills([]);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setError(null);
    setSkills([]);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(UPLOAD_API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to extract skills. Try again later.");
      }

      const data = await response.json();
      setSkills(data.skills || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#E6E0F8",
        fontFamily: "Inter, sans-serif",
        color: "#0F172A",
        padding: "2rem",
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "2rem" }}>
        Upload Your Resume
      </h1>

      <input
        type="file"
        accept=".pdf,.txt"
        onChange={handleFileChange}
        style={{ marginTop: "1.5rem" }}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          marginTop: "1rem",
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: 6,
          border: "none",
          backgroundColor: "#1E40AF",
          color: "white",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Extracting..." : "Extract Skills"}
      </button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {skills.length > 0 && (
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            justifyContent: "center",
          }}
        >
          {skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#38BDF8",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: 20,
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "3rem",
          padding: "0.6rem 1.2rem",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: 6,
          border: "1px solid #1E40AF",
          backgroundColor: "white",
          color: "#1E40AF",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default UploadPage;
