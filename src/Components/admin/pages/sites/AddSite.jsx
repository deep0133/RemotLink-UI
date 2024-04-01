import { LuLoader2 } from "react-icons/lu";
import { SitesIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function AddUser({ loading, addFunctionHandler }) {
  return (
    <>
      <Header icon={<SitesIcon />} title={"Add Sites"} subTitle={"Sites"} />
      <Hero
        name={"Add New Site"}
        description={
          "Streamline the process of adding new sites to your system."
        }
      />
      <AddSection addFunctionHandler={addFunctionHandler} loading={loading} />
    </>
  );
}

const AddSection = ({ addFunctionHandler, loading = false }) => {
  const [currentData, setCurrentData] = useState({});

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrentData({ ...currentData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "category" ? parseInt(value, 10) : value;

    setCurrentData((prev) => {
      return { ...prev, [name]: updatedValue };
    });
  };
  const { categoryData, handleFetctData } = useFetch();

  useEffect(() => {
    handleFetctData("api/sites/categories");
  }, []);

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-5 bg-white rounded-lg shadow pb-12'
    >
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='name'
            value={currentData.name}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className='email shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Site Url
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='url'
            value={currentData.url}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Image
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='file'
            name='image'
            onChange={onImageChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Category
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none space-y-2 focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='category'
            onChange={(e) => {
              onChangeHandler(e);
            }}
          >
            <option value={null}>---</option>
            {categoryData &&
              categoryData.map((catg, index) => (
                <option key={index} value={Number(catg.id)}>
                  {catg.name}
                </option>
              ))}
          </select>
        </div>

        <div className='description shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='desc text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Description
          </label>
          <textarea
            rows={"auto"}
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            value={currentData.description}
            name='description'
            onChange={(e) => {
              onChangeHandler(e);
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
            addFunctionHandler(currentData);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Save Site"
          )}
        </button>
      </div>
    </div>
  );
};
