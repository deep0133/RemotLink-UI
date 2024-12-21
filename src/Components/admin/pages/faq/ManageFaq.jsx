import React, { useEffect, useState } from "react";
import { DeleteIcon, EditICon } from "../../assets/constants";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formateData";
import { LuLoader2 } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import SearchFilter from "../../components/category/SearchFilter";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import Pagination from "../../components/Pagination";
export default function ManageFaq({
  faqData,
  sortHandler,
  searchHandler,
  filterHandler,
  onPageChange,
  fetchLoading,
  deleteMessageHandle,
  deleteMessagLoading,
}) {
  const [data, setData] = useState(faqData);

  const [sort, setSort] = useState("-");

  useEffect(() => {
    setData(faqData);
  }, [faqData]);

  useEffect(() => {
    sortHandler(sort, "question");
  }, [sort]);

  return (
    <>
      <Header
        icon={<FaQuestionCircle className='text-white' />}
        title={"FAQ"}
      />
      <Hero
        name={`Manage FAQ`}
        description={`Manage and organize all FAQ efficiently.`}
        btnText={`Add FAQ`}
        btnLink={"/admin/faq/add/"}
      />
      <SearchFilter
        searchHandler={searchHandler}
        setSort={setSort}
        filterHandler={filterHandler}
      />
      <Card
        data={data && data.results}
        path={"/admin/faq/edit"}
        fetchLoading={fetchLoading}
        deleteUserHandle={deleteMessageHandle}
        deleteUserLoading={deleteMessagLoading}
      />
      <Pagination
        previousLink={data && data.previous ? data.previous : null}
        nextLink={data && data.next ? data.next : null}
        totalItems={data && data.count}
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
  // console.log(first)
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
      <div className='row-1 grid grid-cols-12  w-full p-5 border-b gap-5'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          No.
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Question
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Answer
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Links
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Created At
        </div>
        <div className='text-slate-400 text-center text-sm col-span-2 -ml-1 font-medium font-Poppins leading-normal'>
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
                  <div className='grid grid-cols-12 w-full gap-5'>
                    <h3 className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </h3>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.question ? val.question : "---"}
                    </div>
                    <div className='text-indigo-900 line-clamp-2 shrink-0 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.answer ? val.answer : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 line-clamp-1 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.links ? val.links : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
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
