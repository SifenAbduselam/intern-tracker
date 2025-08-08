import React from "react";
import "../styles/list.css";

const InternshipItem = ({ item }) => {
  return (
    <div className={`internship-item ${item.status}`}>
      <h3>{item.company}</h3>
      <p>{item.position}</p>
      <a href={item.link} target="_blank" rel="noreferrer">
        View Application
      </a>
      <span className="status-tag">{item.status}</span>
    </div>
  );
};

export default InternshipItem;