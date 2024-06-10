import { useNavigate } from "react-router-dom";
import { ChevlonIcon } from "../../../assets/constants";

export default function Header({ icon, title, subTitle }) {
  const navigate = useNavigate();

  function searchStringInArray(str) {
    return navLink.find((element) => element.includes(str));
  }

  return (
    <div className='flex w-full px-5 items-center border-b pb-4'>
      <div className='h-8 w-8 p-1 mr-1 rounded-full bg-opacity-80 bg-[#6218C0] flex justify-center items-center'>
        <div className='opacity-100 brightness-150'>{icon}</div>
      </div>

      <div className='flex gap-1'>
        {subTitle && (
          <h3
            onClick={() => {
              navigate(searchStringInArray("/admin/" + subTitle.toLowerCase()));
            }}
            style={{ color: "rgba(98, 24, 192, 0.20)" }}
            className='text-sm font-medium font-Poppins ml-1 cursor-pointer leading-6 flex gap-3'
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

const navLink = [
  "/admin/dashboard",
  "/admin/category",
  "/admin/users",
  "/admin/sites",
  "/admin/reports",
  "/admin/notifications",
  "/admin/institution",
  "/admin/quote",
  "/admin/faq",
];
