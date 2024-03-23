import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  AvatarIcon,
  CategoryIcon,
  DeleteIcon,
  ThreeDots,
} from "../../assets/constants";
import AddSection from "../../components/RightCommonComponents/AddSection";

export default function EditUser({ head_title }) {
  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={"Users"} />
      <div className='mt-8 relative mx-3 bg-white'>
        <DetailSection />

        <div className='dots absolute right-8 top-6'>
          <ThreeDots />
        </div>

        <button
          style={{
            boxShadow: "0px 3px 6px 0px rgba(112, 144, 176, 0.05)",
            border: "rgba(34, 31, 185, 0.14)",
          }}
          className='flex absolute right-10 top-14 gap-2 w-[105px] h-[51px] shrink-0 justify-center items-center bg-white rounded-[7px]'
        >
          <div className='flex px-2 py-1 bg-gray-50 rounded-sm gap-1'>
            <div className=' bg-gray-50'>
              <DeleteIcon />
            </div>
            <p className='text-red-600 text-[13px] font-medium font-Poppins leading-7 bg-gray-50'>
              Delete
            </p>
          </div>
        </button>
        <div
          style={{
            boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10);",
            broder: "1px solid rgba(34, 31, 185, 0.14)",
          }}
        ></div>
        <AddSection
          edit={"Edit User Details"}
          type1={"Name"}
          type2={"Email"}
          type3={"phone Number"}
          type4={"Description"}
          values={[
            "Steve Rogers",
            "steverogers@gmail.com",
            "+91-8989858974",
            "Bandra Kurla Complex, Siddharath Nagar, Vakola, Vicinity, Mumbai, Maharashtra 400055",
          ]}
        />
      </div>
    </>
  );
}

const DetailSection = () => {
  return (
    <div className='border p-8 grid grid-cols-3 relative gap-4 rounded-md bg-[#FBFCFF]'>
      <div className='card-name'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Name
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            Steve Rogers
          </p>
        </div>
      </div>
      <div className='card-email'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Email
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            steverogers33@gmail.com
          </p>
        </div>
      </div>

      <div className='card-phone'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Phone Number
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            +91-8989858974
          </p>
        </div>
      </div>
      <div className='card-address'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Address
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            Googleplex Moauntain View, California U.S.
          </p>
        </div>
      </div>
    </div>
  );
};
