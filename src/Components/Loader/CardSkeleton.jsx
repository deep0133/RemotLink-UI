import React from "react";

export default function CardSkeleton({ key }) {
  return (
    <div key={key} className='p-4 space-y-4 animate-pulse'>
      <div className='w-full h-32 bg-gray-300 rounded'></div>
      <div className='space-y-2'>
        <div className='h-4 bg-gray-200 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2'></div>
      </div>
    </div>
  );
}
