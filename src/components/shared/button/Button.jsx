import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ type, isLoading, isDisabled, to, onClick, children }) => {
  const buttonClass = `button ${type} ${isLoading ? "loading" : ""}`;

  if (to) {
    return (
      <Link
        to={to}
        target="_blank"
        className={buttonClass}
        disabled={isLoading || isDisabled}
      >
        {isLoading ? "Loading..." : children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["solid", "outline"]).isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
