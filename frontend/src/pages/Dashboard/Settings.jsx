import React from "react";
import Header from "../../components/Layout/Header";
import SideNavbar from "../../components/Layout/SideNavbar/SideNavbar";
import MetaData from "../../components/MetaData";

const Settings = () => {
  return (
    <div className="flex w-full h-full">
      <MetaData title="Settings" reverse={true} />
      <div className="left-0 bottom-0 h-full fixed">
        <SideNavbar companyName={"Company Name"} />
      </div>

      <div className="w-full">
        <Header />

        <div className="w-full h-full flex justify-center items-center">
          Settings
        </div>
      </div>
    </div>
  );
};

export default Settings;
