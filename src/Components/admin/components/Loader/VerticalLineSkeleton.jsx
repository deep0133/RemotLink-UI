export default function VerticalLineSkeleton() {
  return (
    <div
      role='status'
      className='w-full max-h-36 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 '
    >
      <div className='h-2 bg-gray-200 rounded-full w-32 mb-2.5'></div>
      <div className='w-16 h-2 mb-4 bg-gray-200 rounded-full'></div>
      <div className='flex items-baseline mt-2'>
        <div className='w-full bg-gray-200 rounded-t-lg h-[78px]'></div>
        <div className='w-full h-16 ms-6 bg-gray-200 rounded-t-lg'></div>
        <div className='w-full bg-gray-200 rounded-t-lg h-14 ms-6'></div>
        <div className='w-full h-18 ms-6 bg-gray-200 rounded-t-lg'></div>
        <div className='w-full bg-gray-200 rounded-t-lg h-12 ms-6'></div>
        <div className='w-full bg-gray-200 rounded-t-lg h-8 ms-6'></div>
        <div className='w-full bg-gray-200 rounded-t-lg h-12 ms-6'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
