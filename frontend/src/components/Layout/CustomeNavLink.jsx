import React from "react";
import { Link } from "react-router-dom";

const CustomeNavLink = ({ menuName, pathLink, tab, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={pathLink}
      className={` font-semibold px-5 py-2 transition-color hover:scale-105 hover:text-primaryDarkBlue transition-all duration-500 ${
        tab === pathLink
          ? "border-b-[3px]  text-primaryDarkBlue border-green-500 "
          : "text-gray-500"
      }`}
    >
      {menuName}
    </Link>
  );
};

export default CustomeNavLink;
