const DataBaseCard = ({ name, image }) => {
  return (
    <div className='card flex gap-3 items-center p-2 duration-300 rounded-[10px] hover:shadow'>
      <img
        className=' rounded-[32px] w-[42px] h-[42px] object-cover border border-blue-800 border-opacity-10'
        src={image ? image : "https://via.placeholder.com/42x42"}
        alt=''
      />
      <div className=' text-blue-900 text-[15px] line-clamp-1 font-medium font-Poppins leading-snug'>
        {name ? name : "---"}
      </div>
    </div>
  );
};

export default DataBaseCard;
