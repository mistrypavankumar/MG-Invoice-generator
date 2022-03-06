import React from "react";
import invoiceImg from "../assets/invoice-img1.svg";
import Navbar from "../components/Layout/Navbar";
import MetaData from "../components/MetaData";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row w-[90%] mx-auto h-[80vh]">
        <MetaData />
        <div className="md:w-1/2 mt-5 md:mt-0 flex flex-col justify-center align-center gap-y-2">
          <h1 className="text-primaryDarkBlue text-4xl md:text-5xl font-bold">
            Simplest to Generate
          </h1>
          <h1 className="text-green-500 font-bold text-4xl md:text-5xl">
            GST E-Invoicing
          </h1>

          <p className="mt-11 text-xl md:text-2xl text-gray-500">
            Issue GST sales invoices in seconds and download them with just one
            click from your phone or laptop
          </p>
        </div>
        <div className="flex justify-center align-center">
          <img className="w-full" src={invoiceImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
