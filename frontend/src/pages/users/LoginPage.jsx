import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AnimatedFormField from "../../components/pages/login_components/AnimatedFormField";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "../../actions/userAction";
import Loader from "../../components/Loader/Loader";
import MetaData from "../../components/MetaData";
import Navbar from "../../components/Layout/Navbar";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/invoice";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect, { replace: true });
    }
  }, [error, alert, dispatch, redirect, isAuthenticated, navigate]);

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="w-full h-[80vh] flex justify-center items-center">
            <MetaData title="Login" />
            <div className=" w-full flex align-center justify-center">
              <form
                className="w-[90%] md:w-[35%] px-4 pt-10 pb-5 mx-auto shadow-md h-auto rounded-md"
                onSubmit={loginSubmit}
              >
                <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
                  Login
                </h1>
                <AnimatedFormField
                  value={email}
                  setOnChangeValue={(e) => setEmail(e.target.value)}
                  inputType="email"
                  labelName="Email"
                />
                <AnimatedFormField
                  value={password}
                  setOnChangeValue={(e) => setPassword(e.target.value)}
                  inputType="password"
                  labelName="Password"
                />

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
        </>
      )}
    </>
  );
};

export default LoginPage;
