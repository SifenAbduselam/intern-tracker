import React from "react";
import { motion } from "framer-motion";
import "../styles/list.css";

const InternshipList = ({ internships, onDelete }) => {
  return (
    <div className="internship-list">
      {internships.map((intern, index) => (
        <motion.div
          key={index}
          className="internship-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="internship-details">
            <h3>{intern.name}</h3>
            <p>{intern.role}</p>
            <a href={intern.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
          <div className="button-group">
            <button
              className="delete-btn"
              onClick={() => onDelete(index)}
            >
               ❌
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InternshipList;
