import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import ForgotPassPage from "./pages/users/ForgotPassPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import store from "./store";
import { loadUser } from "./actions/userAction";
import ProtectedRoute from "./routes/ProtectedRoute";
import Customers from "./pages/Dashboard/Customers";
import Settings from "./pages/Dashboard/Settings";
import Products from "./pages/Dashboard/Products";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/login/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/invoice" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* If router is not specified then show below page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
