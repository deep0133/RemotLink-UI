import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";

export default function Dashboard() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Overview />} />
      </Routes>
    </>
  );
}
