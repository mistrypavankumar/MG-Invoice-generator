import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import SideNavbar from "../components/Layout/SideNavbar/SideNavbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="absolute top-0 bg-white  w-full h-full">
      <SideNavbar companyName={"Company Name"} />

      <Routes>
        <Route exact path="/invoice" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
