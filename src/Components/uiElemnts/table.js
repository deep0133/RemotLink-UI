import React from "react";
import nameLogo from "../../images/Ellipse 13.png";
import lightning from "../../images/lightning.png";
import bookmarkicon2 from "../../images/Vector.png";

function Table() {
  const tableMap = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class=" border-b text-[#A3AED0] text-[14px]">
                <tr>
                  <th scope="col" class="text-sm font-medium  py-4 text-left">
                    No
                  </th>
                  <th scope="col" class="text-sm font-medium   py-4 text-left">
                    Name
                  </th>
                  <th scope="col" class="text-sm font-medium  py-4 text-left">
                    Description
                  </th>
                  <th scope="col" class="text-sm font-medium   py-4 text-left">
                    Live Server
                  </th>
                  <th scope="col" class="text-sm font-medium   py-4 text-left">
                    My Favorite
                  </th>
                  <th scope="col" class="text-sm font-medium   py-4 text-left">
                    Last Access Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableMap.map((e) => (
                  <tr class="bg-white  transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class=" text-[#85A900] py-4 whitespace-nowrap text-sm font-medium  ">
                      #1
                    </td>
                    <td class="text-sm text-gray-900 py-4 whitespace-nowrap flex flex-row items-center font-medium">
                      <img
                        src={nameLogo}
                        className=" w-[25px] h-[25px] mr-2  "
                        alt="namelogo"
                      />{" "}
                      DVL Medical
                    </td>
                    <td class="text-sm text-gray-900  py-4 whitespace-nowrap font-medium">
                      Medical Journals
                    </td>
                    <td class="font-light  py-4 whitespace-nowrap ">
                      <div className=" border w-[74px] h-[30px] text-[#3076D8] text-[14px] rounded-md flex flex-row  justify-center items-center font-medium ">
                        {/* <span className="text-[#3076D8] font-medium text-[14px] mr-2"></span> */}
                        Start{" "}
                        <img
                          src={lightning}
                          className=" w-[20px] h-[20px] mt-[6px] "
                          alt="namelogo"
                        />
                      </div>
                    </td>

                    <td class="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      <div className=" mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center font-medium">
                        <img
                          src={bookmarkicon2}
                          className=" w-[10px] h-[12px]"
                        />{" "}
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light  py-4 whitespace-nowrap font-medium">
                      24 January 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
