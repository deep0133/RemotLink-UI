import React from "react";
import btn_icon from "../uiElemnts/button";

const Button = ({ handleBackToTop }) => {
  return (
    <div>
      <button
        className="relative top-[200px] right-[40px]"
        onClick={handleBackToTop}
      >
        <img src={btn_icon} alt="Back top icon" className="" />
        <h1 className="text-white font-Poppins text-base relative bottom-[33px] ">
          Back to Top
        </h1>
      </button>
    </div>
  );
};

export default Button;
