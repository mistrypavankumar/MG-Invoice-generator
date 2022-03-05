import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button";
import CustomeNavLink from "./CustomeNavLink";

import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(window.location.pathname);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="flex justify-between items-center w-[90%] h-[13vh] mx-auto z-20">
      <div className="w-1/3">
        <Link
          className="font-bold text-base sm:text-xl md:text-2xl text-primaryDarkBlue"
          to="/"
          onClick={() => setTab("/")}
        >
          <span className="text-green-500">MG</span>-INVOICE
        </Link>
      </div>

      {/* center menu */}
      <div className="hidden w-full md:block justify-center items-center gap-x-7">
        <div className="flex justify-center items-center">
          <CustomeNavLink
            pathLink="/"
            tab={tab}
            onClick={() => setTab("/")}
            menuName="Home"
          />
          <CustomeNavLink
            pathLink="/invoice"
            tab={tab}
            onClick={() => setTab("/invoice")}
            menuName="Invoicing"
          />
          <CustomeNavLink
            pathLink="/tools"
            tab={tab}
            onClick={() => setTab("/tools")}
            menuName="Tools"
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex justify-end w-1/2 xl:w-1/2">
        {isAuthenticated ? (
          <Button
            label="Dashboard"
            btnType="outline"
            customeStyle="mr-7"
            btnWidth={70}
            onClick={() => {
              navigate("/invoice");
              setTab("/invoice");
            }}
          />
        ) : (
          <>
            <Button
              label="Login"
              btnType="outline"
              customeStyle="mr-7"
              btnWidth={70}
              onClick={() => {
                navigate("/login");
                setTab("/login");
              }}
            />
            <Button
              label="Sign Up"
              btnWidth={70}
              onClick={() => {
                navigate("/register");
                setTab("/register");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
