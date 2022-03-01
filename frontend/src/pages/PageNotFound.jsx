import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pageNotFoundImg from "../assets/page-not-found.svg";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="">
        <img className="w-full" src={pageNotFoundImg} alt="page not found" />
        <Link
          to="/"
          className="scaleable-btn text-center"
          onClick={() => navigate("/", { replace: true })}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
