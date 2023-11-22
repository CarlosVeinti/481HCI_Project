// ToggleSwitch.js
import React, { useState } from 'react';

const ToggleSwitch = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">{isChecked ? 'Mark Table as Occupied' : 'Mark Table as Free'}</span>
    </div>
  );
};

export default ToggleSwitch;