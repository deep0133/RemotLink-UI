import { Link } from "react-router-dom";
import { DeleteIcon, EditICon } from "../../assets/constants";
const Card = ({ data, path }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
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
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {data?.length > 0
          ? data.map((val, index) => {
              return (
                <div
                  key={index}
                  style={
                    index === 1
                      ? {
                          border: "1px solid rgba(90, 53, 255, 0.10)",
                          borderRadius: 5,
                          boxShadow:
                            "0px 8px 40px 0px rgba(112, 144, 176, 0.13)",
                        }
                      : null
                  }
                  className='card flex-1 flex p-2'
                >
                  <div className='grid grid-cols-10 w-full '>
                    <h3 className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {val.name}
                    </h3>
                    <div className='text-indigo-900 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.url}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.desc}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.category}
                    </div>
                    <div className='action flex items-center gap-3'>
                      <Link
                        to={`/admin/category/edit/${path}/${val.id}`}
                        className='cursor-pointer'
                      >
                        <EditICon />
                      </Link>
                      <div className='cursor-pointer'>
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
