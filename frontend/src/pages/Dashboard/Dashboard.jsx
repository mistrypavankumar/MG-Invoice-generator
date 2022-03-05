import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import SideNavbar from "../../components/Layout/SideNavbar/SideNavbar";
import Header from "../../components/Layout/Header";
import MetaData from "../../components/MetaData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="absolute top-0 flex bg-white  w-full h-full">
      <MetaData title="Invoice" reverse={true} />
      <div className="left-0 bottom-0 h-full fixed">
        <SideNavbar companyName={"Company Name"} />
      </div>

      <div className="w-full">
        <Header />

        <div className="w-full h-full flex justify-center items-center">
          Invoice
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
