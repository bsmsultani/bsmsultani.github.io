import React, { useState } from 'react';

const CollapsibleCode = ({ codeContent, title = "Code" }) => {
  // State to track if the content is collapsed or expanded
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle collapsed state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible-container">
      <button className="collapsible-header" onClick={toggleCollapse}>
        {isCollapsed ? 'Show' : 'Hide'} {title}
      </button>

      {!isCollapsed && (
        <div className="collapsible-content">
          <pre>
            <code>{codeContent}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCode;
