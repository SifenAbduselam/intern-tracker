import React from "react";
import "../styles/filter.css";

const Filter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="filter-container">
      <label htmlFor="statusFilter">Filter by Status:</label>
      <select
        id="statusFilter"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default Filter;
