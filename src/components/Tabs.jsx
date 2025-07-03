import React from 'react';
import '../styles/Tabs.css';

const Tabs = ({ current, onChange }) => (
  <div className="tabs">
    {['All', 'Active', 'Completed'].map(tab => (
      <button
        key={tab}
        className={current === tab ? 'active' : ''}
        onClick={() => onChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
