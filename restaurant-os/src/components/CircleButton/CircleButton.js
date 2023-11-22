import React from 'react';
import PropTypes from 'prop-types';
import './CircleButton.css'; // Import your CSS file for styling

const CircleButton = ({ children, className, status }) => {
  const buttonStyle = {
    // Any shared styles here
  };

  const buttonText = status ? `${children} - ${status}` : children;

  return <button className={`circle-button ${className}`} style={buttonStyle}>{buttonText}</button>;
};

CircleButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  status: PropTypes.string,
};

export default CircleButton;