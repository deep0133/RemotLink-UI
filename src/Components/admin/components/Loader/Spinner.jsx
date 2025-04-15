import React from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Spinner() {
  return (
    <div className='w-fit mx-auto custom-spin'>
      <LuLoader2 className='' />
    </div>
  );
}
