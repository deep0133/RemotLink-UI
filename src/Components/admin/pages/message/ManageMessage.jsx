import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { AiTwotoneMessage } from "react-icons/ai";
import SearchFilter from "../../components/category/SearchFilter";
import { LuLoader2 } from "react-icons/lu";
import { DeleteIcon, EditICon } from "../../assets/constants";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination";
import Hero from "../../components/category/Hero";
import { formatDate } from "../../utils/formateData";
export default function ManageMessage({
  data,
  sortHandler,
  searchHandler,
  filterHandler,
  onPageChange,
  fetchLoading,
  deleteMessageHandle,
  deleteMessagLoading,
}) {
  const [msgData, setMsgData] = useState(data);

  const [sort, setSort] = useState("-");

  useEffect(() => {
    setMsgData(data);
  }, [data]);

  useEffect(() => {
    sortHandler(sort, "message");
  }, [sort]);

  return (
    <>
      <Header icon={<AiTwotoneMessage />} title={"Quote"} />
      <Hero
        name={`Manage Quote`}
        description={`Manage and organize all Quote efficiently.`}
        icon={<AiTwotoneMessage />}
        btnText={`Add Quote`}
        btnLink={"/admin/quote/add/"}
      />
      <SearchFilter
        searchHandler={searchHandler}
        setSort={setSort}
        filterHandler={filterHandler}
      />
      <Card
        data={msgData && msgData.results}
        path={"/admin/quote/edit"}
        fetchLoading={fetchLoading}
        deleteUserHandle={deleteMessageHandle}
        deleteUserLoading={deleteMessagLoading}
      />
      <Pagination
        previousLink={msgData && msgData.previous ? msgData.previous : null}
        nextLink={msgData && msgData.next ? msgData.next : null}
        totalItems={msgData && msgData.count}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    </>
  );
}

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
      className={`rounded-lg relative mt-5 ml-3 ${
        fetchLoading || deleteUserLoading ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <div className='row-1 grid grid-cols-10  w-full p-5 border-b gap-5'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          No.
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-4 text-sm font-medium font-Poppins leading-normal'>
          Message
        </div>
        <div className='text-slate-400 col-span-3 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Created At
        </div>
        <div className='text-slate-400 text-center text-sm col-span-2 -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>

      {deleteUserLoading && (
        <div className='absolute w-full h-full max-h-[380px] backdrop:blur-md '>
          <div className='w-full h-full relative -inset-3 bg-black/10 flex justify-center items-center'>
            <div className='w-fit animate-spin '>
              <LuLoader2 />
            </div>
          </div>
        </div>
      )}
      <div className='card-container flex-1  px-3 py-2 w-full max-h-[380px] overflow-auto'>
        {!fetchLoading ? (
          Array.isArray(data) &&
          (data.length > 0 ? (
            data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-10 w-full gap-5'>
                    <h3 className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </h3>
                    <div className='text-indigo-900 line-clamp-1 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.message ? val.message : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.created_at ? formatDate(val.created_at) : "---"}
                    </div>
                    <div className='action flex items-center col-span-2 justify-center gap-3'>
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
          ) : (
            <div className='text-lg p-5'>No Data Found</div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
