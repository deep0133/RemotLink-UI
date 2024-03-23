import { Link } from "react-router-dom";
import { DeleteIcon, EditICon } from "../../assets/constants";
const CategoryList = ({ data, path }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 max-h-[380px] overflow-auto'
    >
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
                        boxShadow: "0px 8px 40px 0px rgba(112, 144, 176, 0.13)",
                      }
                    : null
                }
                className='card flex-1 flex p-2'
              >
                <div className='flex w-full'>
                  <h3 className='text-indigo-900 basis-44 text-sm font-medium font-Poppins leading-7'>
                    {val.title}
                  </h3>
                  <div className='text-indigo-900 flex-1 text-sm font-medium font-Poppins leading-7'>
                    {val.description}
                  </div>
                </div>
                <div className='icons flex items-center gap-3'>
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
            );
          })
        : "No Data Found"}
    </div>
  );
};

export default CategoryList;
