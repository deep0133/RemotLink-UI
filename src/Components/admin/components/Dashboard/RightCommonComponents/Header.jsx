import { ChevlonIcon } from "../../../assets/constants";

export default function Header({ icon, title, subTitle }) {
  return (
    <div className='flex w-full px-5 items-center border-b pb-4'>
      <div className='h-8 w-8 p-1 mr-1 rounded-full bg-opacity-80 bg-[#6218C0] flex justify-center items-center'>
        <div className='opacity-100 brightness-150'>{icon}</div>
      </div>

      <div className='flex gap-1'>
        {subTitle && (
          <h3
            style={{ color: "rgba(98, 24, 192, 0.20)" }}
            className='text-sm font-medium font-Poppins ml-1 leading-6 flex gap-3'
          >
            {subTitle}
            <div className='-rotate-90'>
              <ChevlonIcon fill={"#5b21b6"} />
            </div>
          </h3>
        )}
        <h3 className='text-violet-800 text-sm font-medium font-Poppins ml-1 leading-6'>
          {title}
        </h3>
      </div>
    </div>
  );
}
