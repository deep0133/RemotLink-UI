import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RightMenu = ({ navItems }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {navItems.map((val, index) => {
        return (
          <NavLink
            key={index}
            to={val.path}
            className={`text-center px-1 text-sm font-semibold font-Poppins leading-tight py-3 ${
              val.path === currentPath
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
