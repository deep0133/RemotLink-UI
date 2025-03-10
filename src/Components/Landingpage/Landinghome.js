import React, { useEffect, useState } from "react";
import Video from "./Video";
import Banner from "./Banner";
import Categories from "./Categories";
import Featured from "./Featured";
import Hero from "./Hero";
import generateUrl from "../admin/utils/urlGenerate";

const Landinghome = ({
  institutionDetails,
  catgorialResource,
  catgorialResourceLoading,
  featureResourceLoading,
  featureResourceData,
  setUnauthorizedUserSourcelink,
}) => {
  const [keys, setKeys] = useState([]);
  const [active, setActive] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    if (catgorialResource) {
      const key = Object.keys(catgorialResource);
      setKeys(key);
      setActive(key[0]);
    }
  }, [catgorialResource]);

  useEffect(() => {
    if (active) {
      const updatedData = catgorialResource[active];
      if (updatedData && updatedData.length > 0) {
        setData(updatedData);
      }
    }
  }, [active, catgorialResource]);

  const changeSubjects = (val) => {
    const updatedData = catgorialResource[val];
    if (updatedData && updatedData.length > 0) {
      setActive(val);
    }
  };

  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchUrl = async () => {
      const domain = await generateUrl();
      setUrl(domain);
    };

    fetchUrl();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            institutionDetails?.landing_page_image ?  url + institutionDetails?.landing_page_image : ""
          })`,
        }}
        className='background w-full  overflow-y-scroll no-scrollbar'
      >
        <Banner institutionDetails={institutionDetails} />
      </div>

      <div className='w-full h-full  bg-[#06040E] light:bg-primary purple:bg-primary '>
        <Hero />
        {catgorialResourceLoading ? (
          "Loading Data..."
        ) : (
          <Categories
            originalData={catgorialResource}
            data={data && data}
            keys={keys}
            active={active}
            changeSubjects={changeSubjects}
            setUnauthorizedUserSourcelink={setUnauthorizedUserSourcelink}
          />
        )}
        <Featured
          featureResourceLoading={featureResourceLoading}
          featureResourceData={featureResourceData}
          setUnauthorizedUserSourcelink={setUnauthorizedUserSourcelink}
        />
        <Video />
      </div>
    </>
  );
};

export default Landinghome;
