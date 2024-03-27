import { Route, Routes } from "react-router-dom";
import UserLogs from "./UserLogs";
import UserReports from "./UserReports";
import SiteUsages from "./SiteUsages";

export default function Report() {
  return (
    <Routes>
      <Route path='/' element={<UserReports />} />
      <Route path='/user/logs' element={<UserLogs />} />
      <Route path='/site/usage' element={<SiteUsages />} />
    </Routes>
  );
}
