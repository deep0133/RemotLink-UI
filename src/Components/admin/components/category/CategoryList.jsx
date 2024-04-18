import { Link } from "react-router-dom";
import { DeleteIcon, EditICon } from "../../assets/constants";
import Loader from "../Loader/Loader.jsx";
const CategoryList = ({
  fetchLoading = false,
  data,
  path,
  loading,
  handleDeleteCategory,
}) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className={`rounded-lg relative mt-5 ml-3 max-h-[380px] ${
        loading ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      {loading && <Loader />}
      <div className='row-1 sticky top-0 grid grid-cols-9 bg-white w-full px-5 py-3 mb-2 border-b'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          #id
        </div>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-4 text-sm font-medium font-Poppins leading-normal'>
          Description
        </div>
        <div className='text-slate-400 text-center justify-center flex col-span-2 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>

      {!fetchLoading ? (
        Array.isArray(data) && data.length > 0 ? (
          data.map((val, index) => {
            return (
              <div
                key={index}
                className='card grid list grid-cols-9 mx-2 duration-200'
              >
                <div className='grid w-full px-3 py-2 col-span-7 grid-cols-7'>
                  <h3 className='text-indigo-900 col-span-1 basis-44 text-sm font-medium font-Poppins leading-7'>
                    {val && val.id}
                  </h3>
                  <h3 className='text-indigo-900 line-clamp-1 col-span-2 basis-44 text-sm font-medium font-Poppins leading-7'>
                    {val && val.name ? val.name : "---"}
                  </h3>
                  <div className='text-indigo-900 line-clamp-1 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                    {val && val.description ? val.description : "---"}
                  </div>
                </div>
                <div className='icons flex px-3 py-2 col-span-2 justify-center items-center gap-3'>
                  <Link
                    to={`/admin/category/edit/${path}/${val.id}`}
                    className='cursor-pointer'
                  >
                    <EditICon />
                  </Link>
                  <div className='cursor-pointer'>
                    <div
                      onClick={() => {
                        handleDeleteCategory(val.id);
                      }}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className='p-5 text-lg'>No Data Found</div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CategoryList;
