import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import useFetch from "../../hooks/useFetch";
// import useAdd from "../../hooks/useAdd";
import useUpdate from "../../hooks/useUpdate";
import { useEffect, useState } from "react";
import Edit from "./Edit";
import generateUrl from "../../utils/urlGenerate";

export default function Institution() {
  const { institutionData, handleFetctInstitution } = useFetch();

  const { updateInstiLoading, updateInstinMessage, handleUpdatInstitution } =
    useUpdate();

  useEffect(() => {
    handleFetctInstitution("api/institution/detail");
  }, [updateInstinMessage]);

  const [domain, setDomain] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await generateUrl();
      setDomain(url);
    };
    fetchUrl();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Details data={institutionData} domain={domain} />}
        />
        <Route
          path='/edit/:id'
          element={
            <Edit
              data={institutionData}
              domain={domain}
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
