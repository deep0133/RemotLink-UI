import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { LuLoader2 } from "react-icons/lu";
import { EditICon } from "../../assets/constants";
import { AiTwotoneMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Loader/Spinner";

export default function EditFaq({ data, loading, updateFunctionHandler }) {
  const [faq, setFaq] = useState("");
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
        setFaq({
          question: founded?.question,
          answer: founded?.answer,
          links: founded?.links,
        });
      }
    }
  }, [data]);

  return (
    <>
      <Header icon={<AiTwotoneMessage />} title={"Edit FAQ"} subTitle={"FAQ"} />
      <Edit
        faq={faq}
        setFaq={setFaq}
        id={id}
        loading={loading}
        updateFunctionHandler={updateFunctionHandler}
      />
    </>
  );
}

const Edit = ({ id, loading, setFaq, faq, updateFunctionHandler }) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFaq((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mx-3 mt-5 bg-white overflow-auto rounded-lg shadow pb-12'
    >
      <div className='flex gap-2 py-4 border-b px-1'>
        <EditICon />
        <h3 className='text-[#631AC0] font-Poppins text-[17px] font-semibold leading-[27px]'>
          Edit Faq Details
        </h3>
      </div>
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Question
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='question'
            value={faq.question}
            onChange={onChangeHandler}
          />
        </div>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Answer
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='answer'
            value={faq.answer}
            onChange={onChangeHandler}
          />
        </div>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Link
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='links'
            value={faq.links}
            onChange={onChangeHandler}
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
            updateFunctionHandler(id, faq);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? <Spinner /> : "Update"}
        </button>
      </div>
    </div>
  );
};
