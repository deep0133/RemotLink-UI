import { Routes, Route } from "react-router-dom";
import ManageFaq from "./ManageFaq";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import useAdd from "../../hooks/useAdd";
import useDelete from "../../hooks/useDelete";
import { useEffect } from "react";
import AddFaq from "./AddFaq";
import EditFaq from "./EditFaq";
export default function Faq() {
  const { faqLoading, faqData, handleFetchFaq } = useFetch();
  const { deleteFaqMsg, deleteFaqLoading, handleDeleteFaq } = useDelete();

  const { addFaqLoading, faqAddMessage, handleAddFaq } = useAdd();

  const { updateFaqLoading, updateFaqMessage, handleUpdateFaq } = useUpdate();

  useEffect(() => {
    handleFetchFaq("api/faq/");
  }, [faqAddMessage, updateFaqMessage, deleteFaqMsg]);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <ManageFaq
            fetchLoading={faqLoading}
            faqData={faqData}
            searchHandler={(key) => {
              handleFetchFaq("api/faq/" + key);
            }}
            sortHandler={(order, type) => {
              handleFetchFaq("api/faq/?ordering=" + order + type);
            }}
            filterHandler={(date, type) => {
              handleFetchFaq("api/faq/?created_at__" + type + "=" + date);
            }}
            deleteMessagLoading={deleteFaqLoading}
            deleteMessageHandle={(id) => {
              handleDeleteFaq("api/faq/delete/" + id);
            }}
          />
        }
      />
      <Route
        path='/add'
        element={
          <AddFaq
            addFunctionHandler={(data) => {
              handleAddFaq("api/faq/add/", data);
            }}
            loading={addFaqLoading}
          />
        }
      />
      <Route
        path='/edit/:id'
        element={
          <EditFaq
            data={faqData}
            loading={updateFaqLoading}
            updateFunctionHandler={(id, data) => {
              handleUpdateFaq("api/faq/update/" + id, data);
            }}
          />
        }
      />
    </Routes>
  );
}
