import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { AiTwotoneMessage } from "react-icons/ai";
import { EditICon } from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";

export default function Edit({
  data,
  updateFunctionHandler,
  updateUserLoading,
}) {
  const [msg, setMsg] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const last = url[url.length - 1];
    setId(last);

    if (data) {
      const founded = data.results.find(
        (msg) => String(msg.id) === String(last)
      );
      if (founded) {
        setMsg(founded.message);
      }
    }
  }, [data]);

  return (
    <>
      <Header
        icon={<AiTwotoneMessage />}
        title={"Edit Quote"}
        subTitle={"Quote"}
      />
      <EditMsg
        msg={msg}
        setMsg={setMsg}
        id={id}
        loading={updateUserLoading}
        updateFunctionHandler={updateFunctionHandler}
      />
    </>
  );
}

const EditMsg = ({ loading, msg, setMsg, id, updateFunctionHandler }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
        }}
        className='border relative px-6 mt-5 bg-white rounded-lg shadow pb-12'
      >
        <div className='flex gap-2 py-4 border-b px-1'>
          <EditICon />
          <h3 className='text-[#631AC0] font-Poppins text-[17px] font-semibold leading-[27px]'>
            Edit Message Details
          </h3>
        </div>
        <div className='form my-6 grid grid-cols-3 gap-8 '>
          <div className=' shrink-0 space-y-2'>
            <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Message
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              name='message'
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='btns flex gap-5 flex-1 justify-end'>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={() => {
              updateFunctionHandler(id, { message: msg });
            }}
            className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
          >
            {loading ? (
              <div className='animate-spin w-fit mx-auto'>
                <LuLoader2 />
              </div>
            ) : (
              "Update Quote"
            )}
          </button>
        </div>
      </div>
    </>
  );
};
