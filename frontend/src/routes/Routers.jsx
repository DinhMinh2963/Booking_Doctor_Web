import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../dashboard/user-account/MyAccount";
import Dashboard from "../dashboard/doctor-account/DashBoard";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminPanel from "../components/admin/AdminPanel";
import AdminProfile from "../dashboard/admin-account/AdminProfile";
import Admin from "../pages/Admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Service />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient", "admin"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/profile/me"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminProfile/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
