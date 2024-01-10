import React from "react";

const Button = ({ handleBackToTop, title }) => {
  return (
    <button className="px-4 py-2 border text-white" onClick={handleBackToTop}>
      {title}
    </button>
  );
};

export default Button;
