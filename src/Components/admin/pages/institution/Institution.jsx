import { Route, Routes } from "react-router-dom";
import Details from "./Details";

export default function Institution() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Details />} />
      </Routes>
    </>
  );
}
