import React from "react";

const SecondaryButton = ({ name, className = "", onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-white
        text-[rgba(22,56,94,1)]
        font-semibold
        rounded-lg
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

export default SecondaryButton;

