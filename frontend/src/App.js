import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import ForgotPassPage from "./pages/users/ForgotPassPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import store from "./store";
import { loadUser } from "./actions/userAction";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/login/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* If router is not specified then show below page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
