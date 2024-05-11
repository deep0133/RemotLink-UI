import React from "react";

import lightning from "../../images/lightning.png";
import useFetch from "../../hooks/useFetch";
import { LuLoader2 } from "react-icons/lu";

function MobileTable({ allSites }) {
  const { createProxyAPI, searchLoader } = useFetch();
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
                    className='text-sm font-medium  py-4 w-[15%] text-left'
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
                </tr>
              </thead>
              <tbody className='font-medium'>
                {searchLoader === false ? (
                  allSites.map((site, index) => (
                    <tr
                      key={index}
                      className='bg-white  transition duration-300 ease-in-out hover:bg-gray-100'
                    >
                      <td className=' text-[#85A900] py-4 whitespace-nowrap text-sm font-medium  '>
                        #{index + 1}
                      </td>
                      <td className='text-sm text-gray-900 py-4 whitespace-nowrap flex flex-row font-medium'>
                        <img
                          src={site.image}
                          className=' w-[25px] h-[25px] mr-2 '
                          alt={site?.name ? site.name : ""}
                        />
                        <div className=' flex items-center'> {site.name}</div>
                      </td>
                      <td className='text-sm text-gray-900 py-4 whitespace-nowrap font-medium'>
                        <div className=' flex  items-center mb-1'>
                          {site.description}
                        </div>
                      </td>
                      <td className='font-light  py-4 whitespace-nowrap '>
                        <div
                          onClick={() => {
                            createProxyAPI(site.id);
                          }}
                          className=' border w-[74px] h-[30px] text-[#3076D8] text-[14px] rounded-md flex flex-row  justify-center items-center '
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
                    </tr>
                  ))
                ) : (
                  <tr className='w-full h-44 grow border-4 flex justify-center items-center animate-spin'>
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

export default MobileTable;
