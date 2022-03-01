import React from "react";
import "./AnimatedFormField.css";

const AnimatedFormField = ({ inputType, labelName, autoComplete }) => {
  return (
    <div className="flex relative h-[40px] group mb-7">
      <input
        type={inputType}
        placeholder=" "
        className="form__input w-full border-2 border-gray-300 rounded-md  outline-none px-4 group focus-within:border-green-500
        hover:border-gray-400
        bg-transparent
        
        "
        autocomplete={autoComplete ? autoComplete : "off"}
      />
      <label
        htmlFor={inputType}
        className="form__label absolute top-[18%] text-gray-400 left-[4%] bg-white group-focus-within:text-sm
        group-focus-within:text-green-500
        font-medium
         transition-all 
        duration-300
        cursor-text -z-10"
      >
        {labelName}
      </label>
    </div>
  );
};

export default AnimatedFormField;
