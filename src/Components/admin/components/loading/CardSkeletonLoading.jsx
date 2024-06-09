export default function CardSkeletonLoading() {
  return (
    <div className='mx-auto max-h-36 bg-white overflow-hidden shadow-lg w-full h-auto rounded-2xl'>
      <div className='h-16 p-3 overflow-hidden bg-gray-200 animate-pulse'></div>
      <div className='p-3'>
        <div className='grid grid-cols-3 gap-4 mt-2'>
          <div className='h-2 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-2 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-2 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-2 col-span-2 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-2 bg-gray-200 rounded  animate-pulse'></div>
          <div className='...'></div>
          <div className='col-span-2 ...'></div>
        </div>
      </div>
    </div>
  );
}
