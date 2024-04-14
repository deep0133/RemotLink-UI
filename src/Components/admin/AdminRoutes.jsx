import Dashboard from "./pages/dashboard/Dashboard";
import PageLayout from "./Layouts/PageLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import Category from "./pages/category/Category";
import User from "./pages/users/User";
import Reports from "./pages/reports/Reports";
import Notifications from "./pages/notification/Notifications";
import Institution from "./pages/institution/Institution";
import Site from "./pages/sites/Site";
import "./style.css";
import Message from "./pages/message/Message";
import Faq from "./pages/faq/Faq";
export default function AdminRoutes() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Navigate to={"/admin/dashboard"} />} />

        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/category/*' element={<Category />} />
        <Route path='/users/*' element={<User />} />
        <Route path='/sites/*' element={<Site />} />
        <Route path='/reports/*' element={<Reports />} />
        <Route path='/notifications/*' element={<Notifications />} />
        <Route path='/institution/*' element={<Institution />} />
        <Route path='/messages/*' element={<Message />} />
        <Route path='/faq/*' element={<Faq />} />
      </Routes>
    </PageLayout>
  );
}
