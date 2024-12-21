import { LuLoader2 } from "react-icons/lu";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AddFaq({ addFunctionHandler, loading }) {
  return (
    <>
      <Header
        icon={<FaQuestionCircle className='text-white' />}
        title={"Add FAQ"}
        subTitle={"FAQ"}
      />
      <Hero
        name={"Add New FAQ"}
        description={"Streamline the process of adding new FAQ to your system."}
      />
      <AddSection addFunctionHandler={addFunctionHandler} loading={loading} />
    </>
  );
}

const AddSection = ({ loading, addFunctionHandler }) => {
  const [faqData, setFaqData] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFaqData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mx-3 mt-5 bg-white overflow-auto rounded-lg shadow pb-12'
    >
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
            value={faqData.question}
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
            value={faqData.answer}
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
            value={faqData.links}
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
            addFunctionHandler(faqData);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Add FAQ"
          )}
        </button>
      </div>
    </div>
  );
};
