import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import useFetch from "../../hooks/useFetch";
import useAdd from "../../hooks/useAdd";
import useUpdate from "../../hooks/useUpdate";
import { useEffect } from "react";

export default function Institution() {
  const { institutionData, handleFetctInstitution } = useFetch();

  const { addMessage } = useAdd();

  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctInstitution("api/institution/detail");
  }, [updateMessage, addMessage]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Details data={institutionData} />} />
      </Routes>
    </>
  );
}
