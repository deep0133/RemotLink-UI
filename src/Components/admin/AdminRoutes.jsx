import Dashboard from "./pages/Dashboard";
import PageLayout from "./Layouts/PageLayout";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/category/Category";
import User from "./pages/users/User";
import Reports from "./pages/reports/Reports";
import Notifications from "./pages/Notifications";
import Institution from "./pages/Institution";
import Site from "./pages/sites/Site";
export default function AdminRoutes() {
  return (
    <PageLayout>
      <Routes>
        <Route path='admin/' element={<Dashboard />} />
        <Route path='admin/category/*' element={<Category />} />
        <Route path='admin/users/*' element={<User />} />
        <Route path='admin/sites/*' element={<Site />} />
        <Route path='admin/reports/*' element={<Reports />} />
        <Route path='admin/notifications/*' element={<Notifications />} />
        <Route path='admin/institution/*' element={<Institution />} />
      </Routes>
    </PageLayout>
  );
}
