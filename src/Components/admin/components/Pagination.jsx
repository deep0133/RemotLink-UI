import React from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({
  previousLink,
  nextLink,
  totalItems = 1,
  itemsPerPage = 1,
  onPageChange = (e) => {},
}) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const customStyles = {
    container:
      "pagination flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4 space-x-5",
    pageLink:
      "text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 hover:border-indigo-400 pt-3 px-2",
    previousLink:
      "flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer",
    nextLink:
      "flex items-center text-gray-600 hover:text-indigo-700 cursor-pointer",
    breakLink: "text-sm font-medium leading-none text-gray-600 pt-3 mr-4 px-2",
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      // pageRangeDisplayed={4}
      marginPagesDisplayed={2}
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
        let questionMark = "";
        let selectedNo = e.selected + 1;
        const link = nextLink || previousLink;

        if (link) {
          questionMark = link?.split("?");
          if (questionMark.length > 1 && questionMark[1].includes("page=")) {
            const queryParams = questionMark[1].split("&");
            const updatedParams = queryParams.map((param) => {
              if (param.includes("page=")) {
                return `page=${selectedNo}`;
              }
              return param;
            });
            questionMark[1] = updatedParams.join("&");
          }
        }

        questionMark[1] = questionMark[1] === undefined ? "" : questionMark[1];

        onPageChange(questionMark[1]);
      }}
      containerClassName={customStyles.container}
      pageClassName={customStyles.pageLink}
      previousLinkClassName={customStyles.previousLink}
      nextLinkClassName={customStyles.nextLink}
      breakClassName={customStyles.breakLink}
      activeClassName={
        "text-indigo-700 border-indigo-400 hover:text-indigo-700"
      }
      disableInitialCallback={true}
    />
  );
}
