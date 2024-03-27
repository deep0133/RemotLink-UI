import { useNavigate } from "react-router-dom";

const Hero = ({
  name,
  description,
  icon,
  icon2,
  btnCount,
  btnText,
  btnText2,
  btnLink,
  btnLink2,
}) => {
  const navigate = useNavigate();
  return (
    <div className='px-3 flex justify-between items-start py-5'>
      <div>
        <div className='SiteCategories text-violet-800 text-[22px] font-semibold font-Poppins leading-[42px] -mt-1'>
          {name}
        </div>
        <div className='ManageTheSiteCategoriesHere opacity-50 text-black text-sm font-medium font-Poppins leading-[42px]'>
          {description}
        </div>
      </div>
      <div className='flex gap-3'>
        {btnText && (
          <button
            onClick={() => {
              navigate(btnLink);
            }}
            style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
            className='border-2  px-5 h-[43px] justify-center rounded-[5px] items-center gap-2 flex'
          >
            {icon}
            <div className='AddSiteCategory text-violet-800 text-[13px] font-medium font-Poppins leading-normal'>
              {btnText}
            </div>
          </button>
        )}
        {btnCount === 2 && (
          <button
            onClick={() => {
              navigate(btnLink2);
            }}
            style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
            className='border-2 px-5 h-[43px] justify-center rounded-[5px] items-center gap-2 flex'
          >
            {icon2}
            <div className='AddSiteCategory text-violet-800 text-[13px] font-medium font-Poppins leading-normal'>
              {btnText2}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
