import React from "react";

const PrimaryButton = ({ name, className = "", onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[rgba(255,166,0,1)]
        text-[rgba(22,56,94,1)]
        font-semibold
        rounded-lg
        shadow-[-5px_5px_30px_0px_rgba(0,0,0,1)]
        transition-all
        duration-300
        hover:scale-105
        hover:brightness-110
        active:scale-95
        ${className}
      `}
      type={type}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;

