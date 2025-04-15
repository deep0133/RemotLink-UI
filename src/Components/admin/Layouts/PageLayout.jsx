import { LoginIcon, LogoIcon } from "../assets/constants";
import { sidebarData } from "../data";
import { DonaldTrump } from "../assets/images/index";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import useLogout from "../../../hooks/useLogout";
import useFetch from "../../../hooks/useFetch";
import generateUrl from "../utils/urlGenerate";
export default function PageLayout({ children }) {
  const [userData, setUserData] = useState(null);
  const [proiflePhoto, setProfilePhoto] = useState(null);
  const [domain, setDomain] = useState(null);

  const { logutOutHandler } = useLogout();

  const { institutionDetails, institutionDetailFetch } = useFetch();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userdata");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    institutionDetailFetch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userData) {
      const fetchUrl = async () => {
        const url = await generateUrl();

        const iconLink = userData?.profile_photo
          ? url + userData?.profile_photo
          : null;

        setDomain(url);
        setProfilePhoto(iconLink);
      };

      fetchUrl();
    }
  }, [userData]);

  return (
    <section className='max-w-[1440px] min-w-[85rem] mx-auto relative bg-white flex'>
      <div className=''>
        <div className='left-side-menu w-[254px] sticky top-0 h-[708px] bg-white pt-8 pb-6 px-2 flex flex-col justify-between'>
          <div className=''>
            <Header
              icon={
                institutionDetails?.logo && domain + institutionDetails?.logo
              }
              title={institutionDetails?.name || "Institute Name"}
            />
            <SidebarMenu />
          </div>

          <div className='project-manager bottom-0 px-3 flex items-center gap-1'>
            <DonaldTrump url={proiflePhoto || ""} />
            <div className='content flex justify-start gap-6 items-center flex-1 '>
              <div>
                <h3 className='text-black line-clamp-1 text-nowrap text-xs font-semibold font-Poppins tracking-tight'>
                  {userData
                    ? userData.first_name
                      ? userData.first_name
                      : "First_Name"
                    : "First_Name"}{" "}
                  {userData
                    ? userData.last_name
                      ? userData.last_name
                      : "Last_Name"
                    : "Last_Name"}
                </h3>
                <p className='text-neutral-500 line-clamp-1 text-nowrap text-[11px] font-normal font-Poppins tracking-tight'>
                  {userData
                    ? userData.email
                      ? userData.email
                      : "jainharsh8506@gmail.com"
                    : "jainharsh8506@gmail.com"}
                </p>
              </div>
              <div
                onClick={logutOutHandler}
                className='cursor-pointer duration-200'
              >
                <LoginIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='right flex-1 py-8 pl-1'>{children}</div>
      <ToastContainer />
    </section>
  );
}

const Header = ({ icon, title }) => {
  return (
    <Link to={"/"} className=' w-fit h-7 flex items-center gap-2'>
      {icon ? (
        <img src={icon} className='h-full object-contain' alt='logo' />
      ) : (
        <LogoIcon />
      )}
      <div className=' text-violet-800 text-[13px] font-semibold font-poppins'>
        {title}
      </div>
    </Link>
  );
};

const SidebarMenu = () => {
  const location = useLocation();

  return (
    <div className='side-items mt-6 space-y-2'>
      {sidebarData.map((val, index) => {
        return (
          <NavLink
            to={val.path}
            key={index}
            className={`item-1 relative flex gap-2 px-6 py-3 items-center bg-white rounded-[5px] ${
              location.pathname.includes(val.path)
                ? "text-violet-800 shadow"
                : "text-slate-400"
            }`}
          >
            {val.icon}
            <h3
              className={`w-full  text-sm text-inherit font-medium font-poppins`}
            >
              {val.name}
            </h3>
            {location.pathname.includes(val.path) && (
              <div className='w-[5px] h-[26px] shadow-md absolute left-0 bg-violet-800 rounded-tl-[1px] rounded-tr-[10px] rounded-bl-[1px] rounded-br-[10px]' />
            )}
          </NavLink>
        );
      })}
    </div>
  );
};
