import React from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
  return (
    <div className='text-lg p-5 flex gap-5 items-center'>
      <p className='animate-pulse'>Loading...</p>
      <div className='w-fit  custom-spin '>
        <LuLoader2 />
      </div>
    </div>
  );
}
