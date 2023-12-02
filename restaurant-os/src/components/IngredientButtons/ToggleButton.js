import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ToggleButtons.css';

function IngredientButtonGroup({ groupId, onSelect }) {
  const [radioValue, setRadioValue] = useState('regular');  

  const radios = [
    { name: 'Remove', value: 'remove' },
    { name: 'Regular', value: 'regular' },
    { name: 'Double', value: 'double', price: '2.00' },
    { name: 'Triple', value: 'triple', price: '3.00' },
  ];

  const handleButtonClick = (e) => {
    const newValue = e.currentTarget.value;
    setRadioValue(newValue);
    onSelect(groupId, newValue);
};

  return (
    <div className="ingredient-button-group">
      {radios.map((radio, idx) => (
        <div className="ingredient-action" key={idx}>
          <ToggleButton
            id={`food-${idx}-${groupId}`}
            type="radio"
            variant="outline-primary"
            name={`food-${groupId}`}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleButtonClick}
            style={{ borderRadius: '50%', width: '90px', height: '90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <div>{radio.name}</div>
            {(radio.value === 'double' || radio.value === 'triple') && (
              <div style={{ fontSize: '0.75em' }}>${radio.price}</div>
            )}
          </ToggleButton>
        </div>
      ))}
    </div>
  );
}

export default IngredientButtonGroup;
