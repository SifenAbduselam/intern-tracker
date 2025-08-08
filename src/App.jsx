import React, { useState, useEffect } from "react";
import InternshipForm from "./components/InternshipForm";
import InternshipList from "./components/InternshipList";
import Filter from "./components/Filter";
import "./styles/App.css";

const App = () => {
  const [internships, setInternships] = useState(() => {
    const saved = localStorage.getItem("internships");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    localStorage.setItem("internships", JSON.stringify(internships));
  }, [internships]);

  const addInternship = (internship) => {
    setInternships([...internships, internship]);
  };

  const deleteInternship = (index) => {
    setInternships(internships.filter((_, i) => i !== index));
  };

  const filteredInternships =
    filterStatus === "All"
      ? internships
      : internships.filter((item) => item.status === filterStatus);

  return (
    <div className="app">
      <h1 className="app-title">Internship Tracker</h1>
      <p className="tagline">Track your internship applications </p>
      <InternshipForm onAdd={addInternship} />
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <InternshipList internships={filteredInternships} onDelete={deleteInternship} />
    </div>
  );
};

export default App;
