import {
  CategoryIcon,
  DeleteIcon,
  EditICon,
  FileIcon,
  ThreeDots,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";

export default function EditCategory({ title }) {
  return (
    <>
      <Header icon={<CategoryIcon />} title={title} subTitle={"Categor"} />
      <SiteDetailHero />
      <SiteEditSection heading={title} />
    </>
  );
}

const SiteDetailHero = () => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 14px 35px 1px rgba(112, 144, 176, 0.01)",
      }}
      className='bg-[#FBFCFF] relative px-8 py-5 flex gap-5 rounded-[11px] mt-8 pt-8'
    >
      <div className='name basis-36 '>
        <h3 className='text-black text-opacity-50 text-[13px] font-medium font-Poppins leading-normal'>
          Category
        </h3>
        <h4 className='text-blue-900 mt-2 text-sm font-medium font-Poppins leading-7'>
          Pharmacy
        </h4>
      </div>
      <div className='desc w-full flex justify-between '>
        <div>
          <h3 className='text-black text-opacity-50 text-[13px] font-medium font-Poppins leading-normal'>
            Description
          </h3>
          <div className='max-w-[678px] flex gap-2 mt-2'>
            <div className=''>
              <FileIcon />
            </div>
            <div className='content'>
              <span className='text-blue-900 text-sm font-medium font-Poppins leading-7'>
                Medical is a term that refers to the field of health and healing
              </span>
              <span className='text-blue-900 text-sm font-medium font-Poppins underline leading-7'>
                1
              </span>
              <span className='text-blue-900 text-sm font-medium font-Poppins leading-7'>
                . It encompasses a variety of health care practices evolved to
                maintain and restore health by the prevention and treatment of
                illness Medical professionals include nurses, doctors....
              </span>
            </div>
          </div>
        </div>

        <button className='flex gap-2 w-[105px] h-[51px] shrink-0 justify-center items-center bg-white rounded-[7px] shadow border border-blue-800 border-opacity-10'>
          <DeleteIcon />
          <p className='text-red-600 text-[13px] font-medium font-Poppins leading-7'>
            Delete
          </p>
        </button>
      </div>
      <div className='absolute right-2 top-2 cursor-pointer'>
        <ThreeDots />
      </div>
    </div>
  );
};

const SiteEditSection = ({ heading }) => {
  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-6 bg-white rounded-lg shadow pb-12'
    >
      <div className='title flex gap-2 w-full border-0 border-b border-black/10 py-5'>
        <EditICon />
        <h3 className='text-violet-800 w-full text-[17px] font-semibold font-Poppins leading-[27px]'>
          Edit {heading}
        </h3>
      </div>

      <div className='form flex gap-8 my-6 max-w-[700px] flex-wrap'>
        <div className='parent-category shrink-0 max-w-[320px] space-y-2'>
          <label htmlFor='parent text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Parent Category
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full text-indigo-900 focus:outline-none bg-white rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
          >
            <option value='medical'>Medical</option>
          </select>
        </div>

        <div className='name-category shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='parent text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Name
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            placeholder='Category'
            defaultValue={"Category"}
          />
        </div>

        <div className='name-category shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='parent text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Description
          </label>
          <div
            style={{
              boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
              border: "1px rgba(34.46, 31.38, 185.50, 0.14) solid",
            }}
            className='max-w-[292px] px-3.5 py-2.5  text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          >
            Medical is a term that refers to the field of health and healing1.
            It encompasses a variety of health care practiced to maintain and
          </div>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'>
          Cancel
        </button>
        <button className='w-[118px] px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'>
          Save Details
        </button>
      </div>
    </div>
  );
};
