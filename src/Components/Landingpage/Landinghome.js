import React from "react";
import Video from "./Video";
import Banner from "./Banner";
import Categories from "./Categories";
import Featured from "./Featured";
import Hero from "./Hero";

const Landinghome = () => {
  
  
  return (
    <>
      <div
        className="w-full "
        class="background overflow-y-scroll no-scrollbar"
      >
        <Banner/>
      </div>

      <div className="w-full h-full  bg-[#06040E] light:bg-primary purple:bg-primary ">
        
        <Hero/>
       <Categories/>
       <Featured/>
       <Video/>
      </div>
    </>
  );
};

export default Landinghome;
