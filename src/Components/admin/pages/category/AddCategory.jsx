import { useState } from "react";
import { BulkUserIcon, CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function AddCategory({
  data,
  head_title,
  title,
  hero_name,
  submitText,
  btnLink = "",
  addFunctionHandler,
  addLoading,
}) {
  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={title} />
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
        data={data}
        category={"Category"}
        description={"Description"}
        addFunctionHandler={addFunctionHandler}
        loading={addLoading}
        submitText={submitText}
      />
    </>
  );
}

const AddSection = ({
  data,
  description,
  addFunctionHandler,
  loading = false,
  submitText,
}) => {
  const [currentData, setCurrentData] = useState({});

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    const myValue = e.target.name === "parent" ? Number(value) : value;
    setCurrentData((prev) => {
      return { ...prev, [name]: myValue };
    });
  };

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-5 bg-white rounded-lg shadow pb-12'
    >
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='parent-category shrink-0 max-w-[320px] space-y-2'>
          <label htmlFor='parent text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Parent Category
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            onChange={(e) => {
              onChangeHandler(e);
            }}
            name='parent'
            className='w-full text-indigo-900 focus:outline-none bg-white rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
          >
            <option value={null}>---</option>
            {data &&
              data.results.map((catg) => {
                return <option value={catg.id}>{catg.name}</option>;
              })}
          </select>
        </div>

        <div className=' shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='category'
            value={currentData.category}
            onChange={(e) => {
              onChangeHandler(e);
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
            name='description'
            value={currentData.description}
            onChange={(e) => {
              onChangeHandler(e);
            }}
            className='w-[492px] px-3.5 py-2.5 focus:outline-none text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={() => navigate(-1)}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            addFunctionHandler(currentData);
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
