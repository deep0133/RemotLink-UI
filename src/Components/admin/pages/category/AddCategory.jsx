import { useState } from "react";
import { BulkUserIcon, CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import useAdd from "../../hooks/useAdd";
import { LuLoader2 } from "react-icons/lu";

export default function AddCategory({
  head_title,
  hero_name,
  submitText,
  btnLink = "",
  addAPI,
  extraField,
}) {
  const { addLoading, handleAdd } = useAdd();

  const addFunctionHandler = (category, description) => {
    handleAdd(addAPI, { category, description });
  };

  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={"Users"} />
      <Hero
        name={hero_name}
        description={
          "Streamline the process of adding new users to your system."
        }
        icon={<BulkUserIcon />}
        btnText={"Bulk Add Users"}
        btnLink={btnLink}
      />
      <AddSection
        category={"Category"}
        description={"Description"}
        addFunctionHandler={addFunctionHandler}
        loading={addLoading}
        extraField={extraField}
        submitText={submitText}
      />
    </>
  );
}

const AddSection = ({
  category,
  description,
  siteData,
  addFunctionHandler,
  loading = false,
  submitText,
  extraField,
}) => {
  const [inputCategory, setInputCategory] = useState(
    siteData ? siteData?.name : ""
  );
  const [inputDescription, setInputDescription] = useState(
    siteData ? siteData?.description : ""
  );
  const [inputParent, setInputParent] = useState("");

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-5 bg-white rounded-lg shadow pb-12'
    >
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        {extraField && (
          <div className=' shrink-0 space-y-2'>
            <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
              Parent
            </label>
            <input
              style={{
                border: "1px rgba(34, 31, 185, 0.14) solid",
              }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='text'
              value={inputParent}
              onChange={(e) => {
                setInputParent(e.target.value);
              }}
            />
          </div>
        )}

        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {category}
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            value={inputCategory}
            onChange={(e) => {
              setInputCategory(e.target.value);
            }}
          />
        </div>

        <div className='description shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='desc text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {description}
          </label>
          <textarea
            rows={"auto"}
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            value={inputDescription}
            onChange={(e) => {
              setInputDescription(e.target.value);
            }}
            className='w-[492px] px-3.5 py-2.5 focus:outline-none text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'>
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            addFunctionHandler(inputCategory, inputDescription);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            submitText
          )}
        </button>
      </div>
    </div>
  );
};
