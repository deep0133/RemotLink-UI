import { Route, Routes } from "react-router-dom";
import UserLogs from "./UserLogs";
import SiteUsages from "./SiteUsages";

export default function Report() {
  return (
    <Routes>
      <Route path='/' element={<UserLogs />} />
      <Route path='/siteusage' element={<SiteUsages />} />
    </Routes>
  );
}
