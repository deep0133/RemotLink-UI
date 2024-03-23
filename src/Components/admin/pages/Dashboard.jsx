import { useState } from "react";
import { DashboardIcon } from "../assets/constants";
import Header from "../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../data";

export default function Dashboard() {
  const [selected, setSelected] = useState(0);

  const changeHandler = (index) => {
    setSelected(index);
  };
  return (
    <div className=''>
      <Header icon={<DashboardIcon />} title={"Dashboard"} />
      <Navigation
        data={DashBoardRightMenu}
        selected={selected}
        onChange={changeHandler}
      />
    </div>
  );
}
