import IndexPage from "@/pages/public";
import { Route, Routes } from "react-router";
import DashboardLayout from "./components/layouts/dashboard-layout";
import DashboardLayoutDistributor from "./components/layouts/admin-layout";
import DashboardMainDistributor from "./pages";
import CreateNewPassword from "./pages/auth/createnewpassword";
import ForgotPassword from "./pages/auth/forgotpassword";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Devise from "./pages/devise";
// import SignUpWrapper from "./pages/auth/signupWrapper";
// import EditOrderModal from "./pages/edit-order";

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<IndexPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<CreateNewPassword />} />

      {/* Admin dashboard */}
      <Route path="/dashboard" element={<DashboardLayoutDistributor />}>
        <Route index element={<DashboardMainDistributor />} />
        <Route path="devise" element={<Devise />} />

      </Route>

      {/* Client dashboard */}
      <Route path="/retailer/dashboard" element={<DashboardLayout />}>
  
      </Route>
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
