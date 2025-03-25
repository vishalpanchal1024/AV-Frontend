import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import HomePage from "../pages/Home";
import App from "../pages/Agents";
import MainLayout from "../pages/shared/MainLayout";
import ProtectedRoute from "./ProtectedRoutes";
import Customers from "../pages/customers";
import Agents from "../pages/Agents";
import Appointment from "../pages/Appoinment";
import CustomerDetails from "../pages/CustomerDeatils";
import SystemHealthOverView from "../pages/SystemHealthOverview";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="/register" element={<Register />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* {/* <Route path="customers" element={<Customers />} /> */}
        {/* <Route path="appointments" element={<Appointments />} /> */}
        {/* </Route> */}
        {/* Fallback URL */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* User Section */}
        {/* <Route path="agents-billing" element={<App />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/customer-details" element={<CustomerDetails />} />
            <Route path="/system-health" element={<SystemHealthOverView />} />
          </Route>
        </Route>
        {/* Admin Section */}
        {/* <Route element={<ProtectedRoute role="Admin" />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/leave-types" element={<LeaveTypes />} />
                        <Route path="/dashboard/leave-requests" element={<LeaveRequests />} />
                        <Route path="/dashboard/leave-allocations" element={<LeaveAllocations />} />
                        <Route path="/dashboard/leave-employees" element={<Employees />} />
                    </Route>
                </Route> */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
