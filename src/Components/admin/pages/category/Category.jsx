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
    categoryLoading,
    userCategoryLoading,
    categoryData,
    handleFetctData,
    userCategoryData,
    handleFetctUserCategoryData,
  } = useFetch();

  const { addLoading, addMessage, handleAdd } = useAdd();

  const { deleteMessage, deleteLoading, handleDelete } = useDelete();
  const { updateMessage, updateLoading, handleUpdate } = useUpdate();

  useEffect(() => {
    handleFetctData("api/sites/categories");
  }, [deleteMessage, updateMessage, addMessage]);

  useEffect(() => {
    handleFetctUserCategoryData("api/user/category/");
  }, [updateMessage, deleteMessage, addMessage]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <SiteUserCategory
              name={"Site"}
              title={"Site Category Details "}
              btnLink={"/admin/category/add/sitecategory"}
              data={categoryData}
              deleteLoading={deleteLoading}
              fetchLoading={categoryLoading}
              itemsPerPage={10}
              pagination={true}
              handleDeleteCategory={(id) => {
                handleDelete("api/sites/categories/delete/" + id);
              }}
              searchHandler={(key) => {
                handleFetctData("api/sites/categories/" + key);
              }}
              onPageChange={(key) => {
                handleFetctData("api/sites/categories/?" + key);
              }}
              totalItems={categoryData && categoryData.count}
              sortHandler={(order) => {
                handleFetctData(
                  "api/sites/categories/?ordering=" + order + "name"
                );
              }}
              filterHandler={(date, type) => {
                handleFetctData(
                  "api/sites/categories/?created_at__" + type + "=" + date
                );
              }}
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
              btnLink={"/admin/category/add/usercategory"}
              deleteLoading={deleteLoading}
              handleDeleteCategory={(id) => {
                handleDelete("api/user/category/delete/" + id);
              }}
              fetchLoading={userCategoryLoading}
              searchHandler={(key) => {
                handleFetctUserCategoryData("api/user/category/" + key);
              }}
              pagination={false}
              sortHandler={(order) => {
                handleFetctUserCategoryData(
                  "api/sites/categories/?ordering=" + order + "name"
                );
              }}
              filterHandler={(date, type) => {
                handleFetctUserCategoryData(
                  "api/user/categories/?created_at__" + type + "=" + date
                );
              }}
            />
          }
        />
        <Route
          path='/edit/site/:id'
          element={
            <EditCategory
              title={"Site Category Details"}
              data={categoryData && categoryData.results}
              btnText={"Save Site Category"}
              handleUpdateCategory={(id, data) => {
                handleUpdate(
                  "api/sites/categories/update/" + id,
                  data,
                  "/admin/category"
                );
              }}
              updateLoading={updateLoading}
            />
          }
        />
        <Route
          path='/edit/user/:id'
          element={
            <EditCategory
              title={"User Category Details"}
              data={userCategoryData && userCategoryData.results}
              btnText={"Save Users Category"}
              handleUpdateCategory={(id, data) => {
                handleUpdate(
                  "api/user/category/update/" + id,
                  data,
                  "/admin/category/user"
                );
              }}
              updateLoading={updateLoading}
            />
          }
        />

        <Route
          path='/add/sitecategory'
          element={
            <AddCategory
              data={categoryData}
              title={"Category"}
              btnLink='/admin/users/bulkuser'
              head_title={"Add Site Category"}
              hero_name={"Add New Site Category"}
              submitText={"Save Site Category"}
              addLoading={addLoading}
              addFunctionHandler={(formData) => {
                handleAdd("api/sites/categories/add/", formData);
              }}
            />
          }
        />
        <Route
          path='/add/usercategory'
          element={
            <AddCategory
              data={userCategoryData}
              title={"Category"}
              btnLink='/admin/users/bulkuser'
              head_title={"Add User Category"}
              hero_name={"Add New User Category"}
              submitText={"Save Users Category"}
              addLoading={addLoading}
              addFunctionHandler={(formData) => {
                handleAdd("api/user/category/add/", formData);
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
