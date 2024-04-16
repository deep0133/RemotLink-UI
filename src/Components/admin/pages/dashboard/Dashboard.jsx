import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import UserCategory from "./UserCategory";
import Category from "./Category";
import Resources from "./Resources";

export default function Dashboard() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/usercategory' element={<UserCategory />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </>
  );
}
