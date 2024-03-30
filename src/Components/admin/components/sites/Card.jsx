import { Link } from "react-router-dom";
import { DeleteIcon, EditICon } from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";
import Loading from "../../components/Loader/Loader";
const Card = ({ data, path, deleteSiteHandle, loading, fetchLoading }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className={`rounded-lg p-3 mt-5 ml-3 relative `}
    >
      <div className='row-1 grid grid-cols-10 w-full px-2 pb-5'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-4 text-sm font-medium font-Poppins leading-normal'>
          Site URL
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Description
        </div>
        <div className='text-slate-400 col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Category
        </div>
        <div className='text-slate-400 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>
      <div
        className={`card-container relative flex-1 w-full max-h-[380px] ${
          loading ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        {loading && (
          <div className='absolute w-full h-full max-h-[380px] backdrop:blur-md '>
            <div className='w-full h-full relative -inset-10 bg-black/10 flex justify-center items-center'>
              <div className='w-fit animate-spin '>
                <LuLoader2 />
              </div>
            </div>
          </div>
        )}
        {!fetchLoading ? (
          data &&
          (data.length > 0 ? (
            data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-10 w-full gap-5 '>
                    <h3 className='text-indigo-900 line-clamp-1 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {val.name ? val.name : "---"}
                    </h3>
                    <div className='text-indigo-900 line-clamp-1 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.base_url ? val.base_url : "---"}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.description ? val.description : "---"}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {typeof val.category === "object" &&
                      val.category &&
                      val.category.name
                        ? val.category.name
                        : typeof val.category !== "undefined" &&
                          val.category !== null
                        ? val.category
                        : "---"}
                    </div>
                    <div className='action flex items-center line-clamp-1 gap-3'>
                      <Link to={`${path}/${val.id}`} className='cursor-pointer'>
                        <EditICon />
                      </Link>
                      <div
                        onClick={() => {
                          deleteSiteHandle(val.id);
                        }}
                        className='cursor-pointer'
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='text-lg p-3'>No Data Found</div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Card;
