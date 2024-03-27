import { Link } from "react-router-dom";
import { DeleteIcon, EditICon } from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";

const Card = ({
  data,
  path,
  fetchLoading,
  deleteUserLoading,
  deleteUserHandle,
}) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className={`rounded-lg relative p-3 mt-5 ml-3 ${
        fetchLoading || deleteUserLoading ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <div className='row-1 grid grid-cols-10 w-full px-2 pb-5'>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Email
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Phone Number
        </div>
        <div className='text-slate-400 col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Category
        </div>
        <div className='text-slate-400 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>

      {(fetchLoading || deleteUserLoading) && (
        <div className='absolute w-full h-full max-h-[380px] backdrop:blur-md '>
          <div className='w-full h-full relative -inset-3 bg-black/10 flex justify-center items-center'>
            <div className='w-fit animate-spin '>
              <LuLoader2 />
            </div>
          </div>
        </div>
      )}
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {Array.isArray(data) && data.length > 0
          ? data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-10 w-full '>
                    <h3 className='text-indigo-900 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.first_name ? val.first_name : "---"}{" "}
                      {val.last_name ? val.last_name : "---"}
                    </h3>
                    <div className='text-indigo-900 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.email ? val.email : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.phone_number ? val.phone_number : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.category && typeof val.category === "object"
                        ? val.category.name
                        : val.category || "---"}
                    </div>
                    <div className='action flex items-center gap-3'>
                      <Link to={`${path}/${val.id}`} className='cursor-pointer'>
                        <EditICon />
                      </Link>
                      <div
                        onClick={() => {
                          deleteUserHandle(val.id);
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
          : "No Data Found"}
      </div>
    </div>
  );
};

export default Card;
