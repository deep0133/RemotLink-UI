import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import useFetch from "../../hooks/useFetch";
// import useAdd from "../../hooks/useAdd";
import useUpdate from "../../hooks/useUpdate";
import { useEffect } from "react";
import Edit from "./Edit";

export default function Institution() {
  const { institutionData, handleFetctInstitution } = useFetch();

  const { updateInstiLoading, updateInstinMessage, handleUpdatInstitution } =
    useUpdate();

  useEffect(() => {
    handleFetctInstitution("api/institution/detail");
  }, [updateInstinMessage]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Details data={institutionData} />} />
        <Route
          path='/edit/:id'
          element={
            <Edit
              data={institutionData}
              updateHandler={(id, data) => {
                handleUpdatInstitution("api/institution/update/" + id, data);
              }}
              loading={updateInstiLoading}
            />
          }
        />
      </Routes>
    </>
  );
}
