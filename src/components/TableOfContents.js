import React, { useState } from 'react';
import './TableOfContents.css';

const TableOfContents = ({ sections }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className="toc-main-container">
      {sections.map((section, index) => (
        <div key={index} className="toc-section-container">
          <h2 className="toc-header">
            {section[Object.keys(section)[0]]}
          </h2>
            <ul className="toc-list">
              {section.Parts.map((part, partIndex) => (
                <li key={partIndex} className="toc-item">
                  <strong>{part.title}</strong>
                  <p>{part.Description}</p>
                  <div>
                    <span>Published: {part.Date_Published} by {part.Author}</span>
                    <span> | Last Modified: {part.Date_Modified}</span>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
