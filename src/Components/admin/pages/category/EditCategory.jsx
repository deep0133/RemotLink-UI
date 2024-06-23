import { useEffect, useState } from "react";
import {
  CategoryIcon,
  DeleteIcon,
  EditICon,
  FileIcon,
  ThreeDots,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
export default function EditCategory({
  title,
  data,
  handleUpdateCategory,
  updateLoading,
}) {
  const [oldData, setOldData] = useState({});

  const [currentData, setCurrentData] = useState({});

  const [id, setId] = useState("");

  useEffect(() => {
    let url = window.location.pathname.split("/");
    const id = url[url.length - 1];
    setId(id);
    const foundCategory = data.find(
      (category) => category.id.toString() === id.toString()
    );

    if (foundCategory) {
      setCurrentData({
        name: foundCategory.name,
        description: foundCategory.description,
      });
      setOldData((prev) => {
        return {
          title: foundCategory.name,
          description: foundCategory.description,
        };
      });
    }
  }, [data]);

  return (
    <>
      <Header icon={<CategoryIcon />} title={title} subTitle={"Categor"} />
      <SiteDetailHero {...{ ...oldData }} />
      <SiteEditSection
        heading={title}
        id={id}
        currentData={currentData}
        setCurrentData={setCurrentData}
        handleUpdateCategory={handleUpdateCategory}
        updateLoading={updateLoading}
      />
    </>
  );
}

const SiteDetailHero = ({ title = "---", description = "---" }) => {
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
        <h4 className='text-blue-900 mt-2  line-clamp-1 text-sm font-medium font-Poppins leading-7'>
          {title}
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
            <div className='content line-clamp-3 text-blue-900 text-sm font-medium font-Poppins leading-7'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SiteEditSection = ({
  id,
  heading,
  submitText = "Save Details",
  currentData,
  setCurrentData,
  handleUpdateCategory,
  updateLoading,
}) => {
  const navigate = useNavigate();
  // const resetFields = () => {
  //   setCurrentData({
  //     name: "",
  //     description: "",
  //     parent: "",
  //   });
  // };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCurrentData((prev) => {
      return { ...prev, [name]: value };
    });
  };

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
        <div className='name-category shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label className='parent text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Name
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            placeholder='Category'
            name='name'
            value={currentData.name}
            onChange={onChangeHandler}
          />
        </div>

        <div className='description-category shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Description
          </label>
          <textarea
            rows='auto'
            style={{
              boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
              border: "1px rgba(34.46, 31.38, 185.50, 0.14) solid",
            }}
            name='description'
            value={currentData.description}
            onChange={onChangeHandler}
            className='max-w-[292px] focus:outline-none px-3.5 py-2.5  text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={() => navigate(-1)}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 hover:bg-purple-200 duration-200 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleUpdateCategory(id, currentData);
          }}
          disabled={updateLoading}
          className={`w-[118px] px-[18px] py-2.5 ${
            updateLoading ? "cursor-not-allowed bg-opacity-75" : ""
          } bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal`}
        >
          {updateLoading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            submitText
          )}
        </button>
      </div>
    </div>
  );
};
