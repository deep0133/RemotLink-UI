import React from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
  return (
    <div className='absolute w-full h-full max-h-[380px] backdrop:blur-md '>
      <div className='w-full h-full relative -inset-3 bg-black/10 flex justify-center items-center'>
        <div className='w-fit animate-spin '>
          <LuLoader2 />
        </div>
      </div>
    </div>
  );
}
