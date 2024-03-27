import Dashboard from "./pages/Dashboard";
import PageLayout from "./Layouts/PageLayout";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import User from "./pages/users/User";
import Reports from "./pages/reports/Reports";
import Notifications from "./pages/notification/Notifications";
import Institution from "./pages/Institution";
import Site from "./pages/sites/Site";
import "./style.css";
export default function AdminRoutes() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/category/*' element={<Category />} />
        <Route path='/users/*' element={<User />} />
        <Route path='/sites/*' element={<Site />} />
        <Route path='/reports/*' element={<Reports />} />
        <Route path='/notifications/*' element={<Notifications />} />
        <Route path='/institution/*' element={<Institution />} />
      </Routes>
    </PageLayout>
  );
}
