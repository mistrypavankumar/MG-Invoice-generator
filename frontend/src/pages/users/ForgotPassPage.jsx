import React from "react";
import AnimatedFormField from "../../components/pages/login_components/AnimatedFormField";

const ForgotPassPage = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className=" w-full flex align-center justify-center">
        <form className="w-[90%] md:w-[35%] px-4 pt-10 pb-5 mx-auto shadow-md h-auto rounded-md">
          <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
            Forgot Password
          </h1>
          <AnimatedFormField inputType="email" labelName="Email" />

          <input
            type="submit"
            value="Send"
            className="scaleable-btn w-[100px]"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
