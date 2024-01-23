import React from "react";

function Pagination({ pageno }) {
  return (
    <div className=" flex flex-row justify-center">
      {/* <div className="  w-8 h-8 rounded-full border flex justify-center items-center m-2">
        &lt;&lt;
      </div>
      <div className=" w-8 h-8 rounded-full border flex justify-center items-center m-2">
        &lt;
      </div> */}
      {pageno.map((e, index) => (
        <div
          key={index}
          className=" w-8 h-8 rounded-full border flex justify-center items-center m-2"
        >
          {e}
        </div>
      ))}
      {/* <div className=" w-8 h-8 rounded-full border flex justify-center items-center m-2">
        &gt;
      </div>
      <div className=" w-8 h-8 rounded-full border flex justify-center items-center m-2">
        &gt;&gt;
      </div> */}
    </div>
  );
}

export default Pagination;
