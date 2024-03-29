import { LoginIcon, LogoIcon } from "../assets/constants";
import { sidebarData } from "../data";
import { DonaldTrump } from "../assets/images/index";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PageLayout({ children }) {
  return (
    <section className='max-w-[1440px] min-w-[85rem] overflow-hidden mx-auto relative bg-white flex'>
      <div className='relative'>
        <div className='left-side-menu w-[254px] h-[708px] sticky top-0 bg-white pt-8 pb-6 px-2 flex flex-col justify-between'>
          <div>
            <Header icon={<LogoIcon />} title={"AVAGS DIGITAL SERVICES"} />
            <SidebarMenu />
          </div>

          <div className='project-manager bottom-0 px-3 mt-8 flex items-center gap-1'>
            <DonaldTrump />
            <div className='content flex justify-start gap-6 items-center flex-1 '>
              <div>
                <h3 className='text-black text-xs font-semibold font-Poppins tracking-tight'>
                  Donald Trump
                </h3>
                <p className='text-neutral-500 text-[11px] font-normal font-Poppins tracking-tight'>
                  Project Manager
                </p>
              </div>
              <LoginIcon />
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
    <div className=' h-7 flex items-center gap-2 justify-center'>
      {icon}
      <div className=' text-violet-800 text-[13px] font-semibold font-poppins'>
        {title}
      </div>
    </div>
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
              className={`w-full text-sm text-inherit font-medium font-poppins`}
            >
              {val.name}
            </h3>
          </NavLink>
        );
      })}
    </div>
  );
};
