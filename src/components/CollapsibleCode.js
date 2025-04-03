import React, { useState } from 'react';

const CollapsibleCode = ({ codeContent, title = "Code" }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '600px',
      margin: '10px auto',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      width: '100%',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    content: {
      overflow: 'hidden',
      maxHeight: isCollapsed ? '0' : '500px',
      opacity: isCollapsed ? 0 : 1,
      transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
      border: isCollapsed ? 'none' : '1px solid #ddd',
      padding: isCollapsed ? '0' : '10px',
      background: isCollapsed ? 'transparent' : '#f4f4f4',
      borderRadius: '5px',
    },
    pre: {
      margin: 0,
      overflowX: 'auto',
    },
    code: {
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.button} 
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        onClick={toggleCollapse}
      >
        {isCollapsed ? '▶ Show' : '▼ Hide'} {title}
      </button>

      <div style={styles.content}>
        <pre style={styles.pre}>
          <code style={styles.code}>{codeContent}</code>
        </pre>
      </div>
    </div>
  );
};

export default CollapsibleCode;
