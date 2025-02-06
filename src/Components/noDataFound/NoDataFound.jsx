const NoDataFound = () => {
  return (
    <div className='z-0 col-span-full flex flex-col items-center rounded-md justify-center bg-gray-50'>
      <div className='w-full max-w-md text-center pb-5'>
        {/* Animated illustration */}
        <div className='animate-float relative mx-auto mb-8 h-28 w-28'>
          <svg
            className='absolute inset-0 h-full w-full text-gray-300'
            viewBox='0 0 200 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z'
              fill='currentColor'
              fillOpacity='0.05'
            />
            <path
              d='M141 141L160 160M150 110C150 132.091 132.091 150 110 150C87.9086 150 70 132.091 70 110C70 87.9086 87.9086 70 110 70C132.091 70 150 87.9086 150 110Z'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M64 84H124V124H64V84Z'
              stroke='currentColor'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M72 92H88V108H72V92Z'
              fill='currentColor'
              fillOpacity='0.1'
            />
          </svg>
        </div>

        {/* Text content */}
        <h2 className='mt-6 text-2xl font-bold text-gray-900'>No Data Found</h2>
        <p className='mt-4 text-gray-500'>
          We couldn&apos;t find any items matching your Database. Try adjusting
          your Database or check back later.
        </p>
      </div>
    </div>
  );
};

export default NoDataFound;
