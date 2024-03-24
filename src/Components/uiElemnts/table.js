import React from "react";
import lightning from "../../images/lightning.png";
import bookmarkicon2 from "../../images/Vector.png";
import useFetch from "../../hooks/useFetch";
import { LuLoader2 } from "react-icons/lu";
import useFavourite from "../../hooks/useFavourite";
import { BsBookmarkCheck } from "react-icons/bs";
function Table({ allSites }) {
  const formattedDate = (dte) => {
    const date = new Date(dte);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const { createProxyAPI, searchLoader } = useFetch();

  const {
    bookMarkedSite,
    setBookMarkedSite,
    handleAddToFavourite,
    handleRemoveToFavourite,
  } = useFavourite();

  const bookMarkHandler = (id) => {
    if (bookMarkedSite[id]) {
      handleRemoveToFavourite(id);
    } else {
      handleAddToFavourite(id);
    }
  };

  return (
    <div class='flex flex-col'>
      <div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
        <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div class='overflow-hidden'>
            <table class='min-w-full'>
              <thead class=' border-b text-[#A3AED0] text-[14px]'>
                <tr>
                  <th scope='col' class='text-sm font-medium  py-4 text-left'>
                    No
                  </th>
                  <th scope='col' class='text-sm font-medium   py-4 text-left'>
                    Name
                  </th>
                  <th scope='col' class='text-sm font-medium  py-4 text-left'>
                    Description
                  </th>
                  <th scope='col' class='text-sm font-medium   py-4 text-left'>
                    Live Server
                  </th>
                  <th scope='col' class='text-sm font-medium   py-4 text-left'>
                    My Favorite
                  </th>
                  <th scope='col' class='text-sm font-medium   py-4 text-left'>
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
                          class='bg-white  transition duration-300 ease-in-out hover:bg-gray-100'
                        >
                          <td class=' text-[#85A900] py-4 whitespace-nowrap text-sm font-medium  '>
                            #{index + 1}
                          </td>
                          <td class='text-sm text-gray-900 py-4 whitespace-nowrap flex flex-row items-center font-medium'>
                            <img
                              src={site.image}
                              className=' w-[25px] h-[25px] mr-2  '
                              alt={site?.name ? site.name : ""}
                            />{" "}
                            {site.name}
                          </td>
                          <td class='text-sm text-gray-900 py-4 whitespace-nowrap font-medium'>
                            {site.description}
                          </td>
                          <td class='font-light  py-4 whitespace-nowrap '>
                            <div
                              onClick={() => {
                                createProxyAPI(site.id);
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

                          <td class='text-sm text-gray-900 font-light  py-4 whitespace-nowrap'>
                            <div
                              onClick={() => {
                                setBookMarkedSite((prev) => ({
                                  ...prev,
                                  [site.id]: !prev[site.id], // Toggling the value associated with site ID
                                }));
                                bookMarkHandler(site.id); // Call your function to handle adding to favorites
                              }}
                              className=' mr-3  rounded-full cursor-pointer border w-[35px] h-[35px] flex justify-center items-center font-medium'
                            >
                              {bookMarkedSite[site.id] === true ? (
                                <BsBookmarkCheck />
                              ) : (
                                <img
                                  src={bookmarkicon2}
                                  className=' w-[10px] h-[12px]'
                                  alt='g'
                                />
                              )}
                            </div>
                          </td>
                          <td class='text-sm text-gray-900 font-light  py-4 whitespace-nowrap md:font-medium'>
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
