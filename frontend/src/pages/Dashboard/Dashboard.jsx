import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SideNavbar from "../../components/Layout/SideNavbar/SideNavbar";
import Header from "../../components/Layout/Header";
import MetaData from "../../components/MetaData";
import Button from "../../components/Button";
import InvoiceCard from "../../components/pages/dashboard_components/InvoiceCard";
import AnimatedFormField from "../../components/pages/login_components/AnimatedFormField";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex w-full h-full">
      <MetaData title="Invoice" reverse={true} />
      <SideNavbar companyName={"Company Name"} />

      <div className="w-full">
        <Header />

        <div className="w-[90%] px-10 md:w-[85%] mx-auto h-full flex flex-col mt-5">
          <div className="w-full h-fit mx-auto flex justify-between">
            <h2 className=" font-semibold text-primaryDarkBlue text-xl md:text-3xl">
              Invoices
            </h2>
            <Button label="New Invoice" customeStyle="bg-green-500 py-1 px-4" />
          </div>

          <div className="grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <InvoiceCard
              fontSize={`50px`}
              cardTitle={`Revenue this month`}
              cardBody={`₹ 0.00`}
              cardBodyStyle={`text-green-500`}
            />
            <InvoiceCard
              fontSize={`50px`}
              cardTitle={`Total Bills`}
              cardBody={`5`}
            />
            <InvoiceCard
              fontSize={`50px`}
              cardTitle={`Due in next 7 days`}
              cardBody={`₹ 0.00`}
            />
          </div>

          <div className="mt-10">
            <div>
              <h2 className="font-medium text-primaryDarkBlue/75 text-base md:text-xl">
                Search Invoices
              </h2>
            </div>
            {/* text fields */}
            <div className="mt-5 grid-col-1 sm:grid-cols-2 grid md:grid-cols-3 gap-5">
              <AnimatedFormField inputType={`text`} labelName="by Customer" />
              <AnimatedFormField labelName={"From"} inputType={`text`} />
              <AnimatedFormField labelName={"To"} inputType={`text`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
