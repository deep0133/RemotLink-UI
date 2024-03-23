import { SiteCategoryData } from "../../data";
import { Route, Routes } from "react-router-dom";
import SiteUserCategory from "./SiteUserCategory";
import EditCategory from "./EditCategory";
import AddCategory from "./AddCategory";

export default function Category() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <SiteUserCategory
              data={SiteCategoryData}
              name={"Site"}
              title={"Site Category Details "}
            />
          }
        />
        <Route
          path='/user'
          element={
            <SiteUserCategory
              data={[
                {
                  id: 1,
                  title: "Medical",
                  description: "You can use in personal or commercial projects",
                },
                {
                  id: 2,
                  title: "Dental",
                  description: "You can use in personal or commercial projects",
                },
              ]}
              name='User'
              title={"User Category Details "}
            />
          }
        />
        <Route
          path='/edit/site/:id'
          element={<EditCategory title={"Site Category Details"} />}
        />
        <Route
          path='/edit/user/:id'
          element={<EditCategory title={"User Category Details"} />}
        />

        <Route
          path='/add/sitecategory'
          element={
            <AddCategory
              head_title={"Add Site Category"}
              hero_name={"Add New Site Category"}
            />
          }
        />
        <Route
          path='/add/usercategory'
          element={
            <AddCategory
              head_title={"Add User Category"}
              hero_name={"Add New User Category"}
            />
          }
        />
      </Routes>
    </>
  );
}
