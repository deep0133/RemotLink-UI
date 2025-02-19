import React from "react";
import lightning from "../../images/lightning.png";
import useFetch from "../../hooks/useFetch";
import { LuLoader2 } from "react-icons/lu";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import defaultImage from "../../images/defaultImage.jpg";

function Table({
  allSites,
  favData,
  handleAddToFavourite,
  handleRemoveToFavourite,
}) {
  const formattedDate = (dte) => {
    const date = new Date(dte);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const { searchLoader } = useFetch();

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full'>
              <thead className=' border-b text-[#A3AED0] text-[14px]'>
                <tr>
                  <th
                    scope='col'
                    className='text-sm font-medium  py-4 text-left'
                  >
                    No
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium   py-4 text-left'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium  py-4 text-left'
                  >
                    Description
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium   py-4 text-left'
                  >
                    Live Server
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium   py-4 text-left'
                  >
                    My Favorite
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium   py-4 text-left'
                  >
                    Last Access Date
                  </th>
                </tr>
              </thead>
              <tbody className=''>
                {searchLoader === false ? (
                  allSites.length > 0 ? (
                    allSites.map((site, index) => {
                      return (
                        <tr
                          key={index}
                          className='bg-white  transition duration-300 ease-in-out hover:bg-gray-100'
                        >
                          <td className=' text-[#85A900] py-4 whitespace-nowrap text-sm font-medium  '>
                            #{index + 1}
                          </td>
                          <td className='text-sm text-gray-900 py-4 whitespace-nowrap flex flex-row items-center font-medium'>
                            <img
                              src={site?.image || defaultImage}
                              className=' w-[25px] h-[25px] mr-2 object-contain '
                              alt={site?.name ? site.name : ""}
                            />{" "}
                            {site.name}
                          </td>
                          <td className='text-sm text-gray-900 py-4 whitespace-nowrap font-medium'>
                            {site.description}
                          </td>
                          <td className='font-light  py-4 whitespace-nowrap '>
                            <div
                              onClick={() => {
                                // createProxyAPI(site.id);
                                if (site?.base_url) {
                                  let url = site.base_url;
                                  if (
                                    !url.startsWith("http://") &&
                                    !url.startsWith("https://")
                                  ) {
                                    url = "https://" + url;
                                  }
                                  window.open(url, "_target");
                                }
                              }}
                              className=' border w-[74px] h-[30px] cursor-pointer text-[#3076D8] text-[14px] rounded-md flex flex-row  justify-center items-center font-medium '
                            >
                              {/* <span className="text-[#3076D8] font-medium text-[14px] mr-2"></span> */}
                              Start{" "}
                              <img
                                src={lightning}
                                className=' w-[20px] h-[20px] mt-[6px] '
                                alt='namelogo'
                              />
                            </div>
                          </td>

                          <td className='text-sm cursor-pointer text-gray-900 font-light  py-4 whitespace-nowrap'>
                            {!favData?.includes(site.id) ? (
                              <MdOutlineBookmarkBorder
                                onClick={() => handleAddToFavourite(site.id)}
                              />
                            ) : (
                              <MdBookmark
                                onClick={() => handleRemoveToFavourite(site.id)}
                                className='text-blue-600'
                              />
                            )}
                          </td>
                          <td className='text-sm text-gray-900 font-light  py-4 whitespace-nowrap md:font-medium'>
                            {formattedDate(site.created_at)}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div>Nothing Found</div>
                  )
                ) : (
                  <tr className='w-full mt-10 flex justify-center items-center animate-spin'>
                    {" "}
                    <LuLoader2 />
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
