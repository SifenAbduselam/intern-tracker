import React, { useState } from "react";
import "../styles/form.css";

const InternshipForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position) 
      {
        setError("Please fill in both Name and Position fields.");
      setTimeout(() => setError(""), 3000); 
      return;
    }

    onAdd({ name, position, companyUrl, status });
    
    setName("");
    setPosition("");
    setCompanyUrl("");
    setStatus("Applied");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position Applied For"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="url"
        placeholder="Company URL"
        value={companyUrl}
        onChange={(e) => setCompanyUrl(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Internship</button>
    </form>
  );
};

export default InternshipForm;
