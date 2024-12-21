import { NavLink, useLocation } from "react-router-dom";

const RightMenu = ({ navItems }) => {
  const location = useLocation();

  return (
    <>
      {navItems.map((val, index) => {
        const { pathname } = location;
        return (
          <NavLink
            key={index}
            to={val.path}
            className={`text-center px-1 text-sm font-semibold font-Poppins leading-tight py-3 ${
              pathname === val.path
                ? "text-violet-800 border-b-2 border-[#6218C0]"
                : "text-blue-900 opacity-40"
            }`}
          >
            {val.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default RightMenu;
