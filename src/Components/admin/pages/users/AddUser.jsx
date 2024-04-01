import { LuLoader2 } from "react-icons/lu";
import { BulkUserIcon, CategoryIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function AddUser({
  head_title,
  hero_name,
  addFunctionHandler,
  addNewUserLoading,
}) {
  const { userCourseData, handleFetctUserCourse } = useFetch();

  useEffect(() => {
    handleFetctUserCourse("api/user/course/");
  }, []);

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
        btnLink={"/admin/users/bulkuser"}
      />
      <AddSection
        addFunctionHandler={addFunctionHandler}
        loading={addNewUserLoading}
        course={userCourseData}
      />
    </>
  );
}

const AddSection = ({ loading, addFunctionHandler, course }) => {
  const [user, setUser] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "category" ? parseInt(value, 10) : value;

    setUser((prev) => {
      return { ...prev, [name]: updatedValue };
    });
  };

  const { userCategoryData, handleFetctUserCategoryData } = useFetch();

  useEffect(() => {
    handleFetctUserCategoryData("api/user/category/");
  }, []);

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
            First Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='first_name'
            value={user.first_name}
            onChange={onChangeHandler}
          />
        </div>

        <div className='email shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Last Name
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='last_name'
            value={user.last_name}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Email
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='email'
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Phone Number
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='phone'
            value={user.phone}
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
          >
            <option value={null}>---</option>
            {userCategoryData &&
              userCategoryData.map((catg, index) => (
                <option key={index} value={catg.id}>
                  {catg.name}
                </option>
              ))}
          </select>
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            library Membership No
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='library_membership_no'
            value={user.library_membership_no}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Course
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none space-y-2 focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='course'
            onChange={onChangeHandler}
          >
            <option value={null}>---</option>
            {course &&
              course.map((cors, index) => (
                <option key={index} value={cors.name}>
                  {cors.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'>
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            addFunctionHandler(user);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Add New User"
          )}
        </button>
      </div>
    </div>
  );
};
