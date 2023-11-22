import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ToggleButtons.css';

function IngredientButtonGroup({ groupId }) {
  const [radioValue, setRadioValue] = useState('');  // Default none selected

  const radios = [
    { name: 'Remove', value: 'remove' },
    { name: 'Regular', value: 'regular'},
    { name: 'Double', value: 'double' },
    { name: 'Triple', value: 'triple' },
  ];

  const handleButtonClick = (e) => {
    // If the clicked button's value matches the currently selected value
    if (e.currentTarget.value === radioValue) {
      // Set to empty string to unselect the button
      setRadioValue('');
    } else {
      // Otherwise, set to the clicked button's value
      setRadioValue(e.currentTarget.value);
    }
  };

  return (
    <div className="ingredient-button-group">  {/* wrapping div to apply custom styles if needed */}
      {radios.map((radio, idx) => (
        <div className="ingredient-action" key={idx}>  {/* wrapper div for each button */}
          <ToggleButton
            id={`food-${idx}-${groupId}`}
            type="radio"
            variant="outline-primary"
            name={`food-${groupId}`}   // make each group's name attribute unique
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleButtonClick}  // Use the custom handler here
            style={{ borderRadius: '50%', width: '90px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {radio.name}
          </ToggleButton>
        </div>
      ))}
    </div>
  );
}

export default IngredientButtonGroup;
