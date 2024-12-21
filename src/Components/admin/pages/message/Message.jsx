import { Route, Routes } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import ManageMessage from "./ManageMessage";
import useAdd from "../../hooks/useAdd";
import { useEffect } from "react";
import useDelete from "../../hooks/useDelete";
import AddMessage from "./AddMessage";
import Edit from "./Edit";

export default function Message() {
  const { messageLoading, messageData, handleFetchMessages } = useFetch();
  const { deleteMessageMsg, deleteMessageLoading, handleDeleteMessageMsg } =
    useDelete();

  const { messageLoadingMsg, messageDataMsg, handleAddMessage } = useAdd();

  const {
    updateMessageMsgData,
    updateMessageMsgLoading,
    handleUpdateMessageMsg,
  } = useUpdate();

  useEffect(() => {
    handleFetchMessages("api/message/");
  }, [deleteMessageMsg, updateMessageMsgData, messageDataMsg]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ManageMessage
              fetchLoading={messageLoading}
              data={messageData}
              searchHandler={(key) => {
                handleFetchMessages("api/message/" + key);
              }}
              sortHandler={(order, type) => {
                handleFetchMessages("api/message/?ordering=" + order + type);
              }}
              filterHandler={(date, type) => {
                handleFetchMessages(
                  "api/message/?created_at__" + type + "=" + date
                );
              }}
              deleteMessagLoading={deleteMessageLoading}
              deleteMessageHandle={(id) => {
                handleDeleteMessageMsg("api/message/delete/" + id);
              }}
            />
          }
        />
        <Route
          path='/add'
          element={
            <AddMessage
              addFunctionHandler={(data) => {
                handleAddMessage("api/message/add/", data);
              }}
              loading={messageLoadingMsg}
            />
          }
        />
        <Route
          path='/edit/:id'
          element={
            <Edit
              data={messageData}
              updateUserLoading={updateMessageMsgLoading}
              updateFunctionHandler={(id, data) => {
                handleUpdateMessageMsg("api/message/update/" + id, data);
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
