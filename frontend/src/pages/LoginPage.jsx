import React from "react";
import { Link } from "react-router-dom";
import AnimatedFormField from "../components/pages/login_components/AnimatedFormField";

const LoginPage = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className=" w-full flex align-center justify-center">
        <form className="w-[90%] md:w-[35%] px-4 pt-10 pb-5 mx-auto shadow-md h-auto rounded-md">
          <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
            Login
          </h1>
          <AnimatedFormField inputType="email" labelName="Email" />
          <AnimatedFormField inputType="password" labelName="Password" />

          <p className="text-green-500">
            <Link to="forgotpassword">Forgot Password ?</Link>
          </p>

          <input
            type="submit"
            value="Login"
            className="scaleable-btn w-[100px]"
          />

          <p className="text-slate-600 flex mt-5">
            New to MG-Invoice ?
            <span className="text-green-500 underline ml-2 block cursor-pointer">
              {" "}
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
