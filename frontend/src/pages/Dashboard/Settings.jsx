import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import SideNavbar from "../../components/Layout/SideNavbar/SideNavbar";
import MetaData from "../../components/MetaData";
import { Tabs, Tab } from "../../components/tab-components/Tab";

const Settings = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex w-full h-full">
      <MetaData title="Invoice" reverse={true} />
      <SideNavbar companyName={"Company Name"} />

      <div className="w-full">
        <Header />

        <div className="w-[90%] px-10 md:w-[85%] mx-auto h-full flex flex-col mt-5">
          <div className="w-full h-fit mx-auto flex justify-between">
            <h2 className=" font-semibold text-primaryDarkBlue text-xl md:text-3xl">
              Settings
            </h2>
          </div>
          <div className="mt-10">
            <Tabs>
              <Tab label={"profile"} tabName={"Profile"}>
                <p>Recommended channels for you</p>
              </Tab>
              <Tab label={"company"} tabName={"Company"}>
                <p>You haven't subscribed to any channel</p>
              </Tab>
              <Tab label={"user"} tabName={"User"}>
                <p>adsasd haven't subscribed to any channel</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
