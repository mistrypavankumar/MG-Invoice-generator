import React, { useState } from "react";
import { MdPerson, MdFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import { menus } from "./constants";
import { IoMdSettings, IoSettingsOutline } from "react-icons/io";

import CustomeIcon from "./CustomeIcon";

// IoMdFolderOpen

const SideNavbar = ({ companyName }) => {
  const [toggle, setToggle] = useState(false);

  const [isActive, setIsActive] = useState(window.location.pathname);

  return (
    <div
      className={`${
        toggle ? "w-[210px]" : "w-[60px]"
      } h-screen transition-all duration-500 bg-primaryDarkBlue relative overflow-hidden`}
    >
      <div className="flex justify-center items-center gap-x-2 overflow-hidden pb-3 border-b-2 border-green-500 border-opacity-20 w-[95%] mx-auto  mt-10">
        <div
          onClick={() => setToggle(!toggle)}
          className="w-[40px] h-[40px] flex justify-center items-center border-2 border-green-500 cursor-pointer bg-primaryBlue rounded-full"
        >
          {<MdPerson className="text-white text-3xl" />}
        </div>

        <p
          className={`text-white text-sm ${
            toggle ? "line-clamp-1" : "hidden"
          } transition-all duration-500 `}
        >
          {companyName && companyName}
        </p>
      </div>

      <div className="w-[100%] mt-3 h-[80%] mx-auto flex flex-col">
        {menus.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-x-2 text-white px-4 py-2 hover:bg-white hover:text-green-500 transition-all duration-200 cursor-pointer ${
                isActive ? "bg-transparent" : "bg-white"
              }`}
              onClick={() => setIsActive(item.path)}
            >
              {isActive ? (
                <CustomeIcon path={item.path} Icon={item.icons[0]} />
              ) : (
                <CustomeIcon path={item.path} Icon={item.icons[1]} />
              )}

              <Link
                className={`${
                  toggle ? "line-clamp-1" : "hidden"
                } transition-all duration-500 `}
                to={item.path}
              >
                {item.menu}
              </Link>
            </div>
          );
        })}

        <div className="absolute bottom-5 flex justify-center gap-x-3 text-white pt-2 border-t-2 border-green-500/20 w-full">
          <CustomeIcon path="/setting" Icon={IoMdSettings} />{" "}
          <p
            className={`text-white text-sm ${
              toggle ? "line-clamp-1" : "hidden"
            } transition-all duration-500 `}
          >
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
