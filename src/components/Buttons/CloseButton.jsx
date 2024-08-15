import React from "react";
import PropTypes from "prop-types";

const CloseButton = ({ handleClick }) => {
  return (
    <button className="absolute top-5 right-7 text-4xl" onClick={handleClick}>
      &times;
    </button>
  );
};

export default CloseButton;

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
