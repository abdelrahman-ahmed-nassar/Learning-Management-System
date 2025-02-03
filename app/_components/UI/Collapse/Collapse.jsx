import React, { useState, useRef } from 'react';
import './Collapse.scss'; // Import the CSS file for styling

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <span>{title}</span>
        <span style={{ marginLeft: 'auto' }}>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;