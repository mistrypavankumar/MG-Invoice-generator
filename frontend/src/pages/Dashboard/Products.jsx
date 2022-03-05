import React from "react";
import Header from "../../components/Layout/Header";
import SideNavbar from "../../components/Layout/SideNavbar/SideNavbar";
import MetaData from "../../components/MetaData";

const Products = () => {
  return (
    <div className="absolute top-0 flex bg-white  w-full h-full">
      <MetaData title="Products" reverse={true} />
      <div className="left-0 bottom-0 h-full fixed">
        <SideNavbar companyName={"Company Name"} />
      </div>

      <div className="w-full">
        <Header />
        <div className="w-full h-full flex justify-center items-center">
          Products
        </div>
      </div>
    </div>
  );
};

export default Products;
