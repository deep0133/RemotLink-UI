import { Route, Routes } from "react-router-dom";
import SiteUserCategory from "./SiteUserCategory";
import EditCategory from "./EditCategory";
import AddCategory from "./AddCategory";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import useDelete from "../../hooks/useDelete";
import useUpdate from "../../hooks/useUpdate";
import useAdd from "../../hooks/useAdd";

export default function Category() {
  const {
    categoryData,
    handleFetctData,
    userCategoryData,
    handleFetctUserCategoryData,
  } = useFetch();

  const { addMessage } = useAdd();

  const { deleteMessage, deleteLoading, handleDelete } = useDelete();
  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctData("api/sites/categories");
  }, [deleteMessage, updateMessage, addMessage]);

  useEffect(() => {
    handleFetctUserCategoryData("api/user/category/");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <SiteUserCategory
              data={categoryData}
              name={"Site"}
              title={"Site Category Details "}
              deleteApi={"api/sites/categories/delete/"}
              btnLink={"/admin/category/add/sitecategory"}
              deleteLoading={deleteLoading}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path='/user'
          element={
            <SiteUserCategory
              data={userCategoryData}
              name='User'
              title={"User Category Details "}
              deleteApi={"api/user/category/delete/"}
              btnLink={"/admin/category/add/usercategory"}
              deleteLoading={deleteLoading}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path='/edit/site/:id'
          element={
            <EditCategory
              title={"Site Category Details"}
              data={categoryData}
              updateAPI={"api/sites/categories/update/"}
              btnText={"Save Site Category"}
              navLink={"/admin/category"}
            />
          }
        />
        <Route
          path='/edit/user/:id'
          element={
            <EditCategory
              title={"User Category Details"}
              data={userCategoryData}
              updateAPI={"api/user/category/update/"}
              btnText={"Save Users Category"}
              navLink={"/admin/category/user"}
            />
          }
        />

        <Route
          path='/add/sitecategory'
          element={
            <AddCategory
              btnLink='/admin/users/bulkuser'
              head_title={"Add Site Category"}
              hero_name={"Add New Site Category"}
              addAPI={"api/sites/categories/add/"}
              submitText={"Save Site Category"}
            />
          }
        />
        <Route
          path='/add/usercategory'
          element={
            <AddCategory
              btnLink='/admin/users/bulkuser'
              head_title={"Add User Category"}
              hero_name={"Add New User Category"}
              addAPI={"api/user/category/add/"}
              extraField={true}
              submitText={"Save Users Category"}
            />
          }
        />
      </Routes>
    </>
  );
}
