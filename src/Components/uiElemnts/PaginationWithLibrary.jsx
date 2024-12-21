import React from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function PaginationWithLibrary({
  currentPage,
  previousLink,
  nextLink,
  totalItems = 1,
  itemsPerPage = 1,
  onPageChange = (e) => {},
}) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const customStyles = {
    container:
      "pagination flex flex-wrap items-center justify-center place-items-center py-10 lg:px-0 sm:px-6 px-4 gap-5",
    pageLink:
      "text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 hover:border-indigo-400 pt-3 px-2",
    previousLink:
      "flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer",
    nextLink:
      "flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer",
    breakLink: "text-sm font-medium leading-none text-gray-600 pt-3 mr-4 px-2",
    activeLink: "text-indigo-700 border-indigo-400 hover:text-indigo-700",
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      previousLabel={
        <div className='text-sm flex space-x-3 font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 pt-3 px-2'>
          <BsArrowLeft />
          <p>Previous</p>
        </div>
      }
      nextLabel={
        <div className='text-sm flex space-x-3 font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 pt-3 px-2'>
          <p>Next</p>
          <BsArrowRight />
        </div>
      }
      breakLabel={"..."}
      onPageChange={(e) => {
        let selectedNo = e.selected + 1;
        onPageChange(selectedNo);
      }}
      containerClassName={customStyles.container}
      pageClassName='page-item'
      pageLinkClassName={customStyles.pageLink}
      previousLinkClassName={customStyles.previousLink}
      nextLinkClassName={customStyles.nextLink}
      breakClassName={customStyles.breakLink}
      activeClassName={customStyles.activeLink}
      disableInitialCallback={true}
      forcePage={currentPage - 1}
    />
  );
}
