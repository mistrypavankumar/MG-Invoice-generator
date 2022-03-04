import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AnimatedFormField from "../../components/pages/login_components/AnimatedFormField";
import Loader from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, register } from "../../actions/userAction";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/dashboard";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(redirect, { replace: true });
    }
  }, [error, alert, dispatch, redirect, isAuthenticated, navigate]);

  const registerSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert.error("password doen't match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className=" w-full flex align-center justify-center">
            <form
              className="w-[90%] md:w-[35%] px-4 pt-8 pb-5 mx-auto shadow-md h-auto rounded-md"
              onSubmit={registerSubmit}
              encType="form-data"
            >
              <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
                Sign Up
              </h1>
              <AnimatedFormField
                value={name}
                setOnChangeValue={(e) => setName(e.target.value)}
                inputType="text"
                labelName="Name"
              />
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
              <AnimatedFormField
                value={confirmPassword}
                setOnChangeValue={(e) => setConfirmPassword(e.target.value)}
                inputType="password"
                labelName="Confirm Password"
              />

              <input
                type="submit"
                value="Sign Up"
                className="scaleable-btn w-[100px]"
              />

              <p className="text-slate-600 flex mt-5">
                Already have an account?
                <span className="text-green-500 underline ml-2 block cursor-pointer">
                  {" "}
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
