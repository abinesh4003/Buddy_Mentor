import React from 'react';
import { useNavigate } from "react-router-dom";

function RegOptions({ setShowRegisterMenu }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        md:absolute md:right-0 md:mt-2
        static mt-2
        w-full md:w-28
        bg-white
        border-1 border-primary
        rounded-xl
        shadow-md
        z-50
        p-1
        overflow-hidden
      "
    >
      <button
        onClick={() => {
          navigate("/register/mentee");
          setShowRegisterMenu(false);
        }}
        className="
          w-full
          py-1
          text-center
          text-sm
          font-semibold
          text-primary
          hover:bg-gray-50
          rounded-md
        "
      >
        Mentees
      </button>

      <div className="h-[1px] bg-primary/40 mx-2 my-1"></div>

      <button
        onClick={() => {
          navigate("/register/institution");
          setShowRegisterMenu(false);
        }}
        className="
          w-full
          py-1
          text-center
          text-sm
          font-semibold
          text-primary
          hover:bg-gray-50
          rounded-md
        "
      >
        Institution
      </button>

      <div className="h-[1px] bg-primary/40 mx-2 my-1"></div>

      <button
        onClick={() => {
          navigate("/register/industry");
          setShowRegisterMenu(false);
        }}
        className="
          w-full
          py-1
          text-center
          text-sm
          font-semibold
          text-primary
          hover:bg-gray-50
          rounded-md
        "
      >
        Industry
      </button>
    </div>
  );
}

export default RegOptions;
