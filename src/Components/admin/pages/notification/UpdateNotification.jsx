import { useEffect, useState } from "react";
import {
  AvatarIcon,
  FileIcon,
  LinkIcon,
  NotificationsIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { LuLoader2 } from "react-icons/lu";
import { formatDate } from "../../utils/formateData";
import { IoCreateOutline } from "react-icons/io5";
import { PiSubtitlesLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
export default function UpdateNotification({
  loading,
  data,
  submitNotificationHandler,
}) {
  const [id, setId] = useState(null);
  const [currentDetail, setCurrentDetail] = useState({
    title: "",
    body: "",
    active: "",
    link: "",
    announcement_type: "Announcement",
  });

  const [oldData, setOldData] = useState({});

  useEffect(() => {
    let path = window.location.pathname;
    let url = path.split("/");
    const id = url[url.length - 1];
    setId(id);
    let d_type = "";
    if (path.includes("announcement")) d_type = "announcement";
    else if (path.includes("link")) d_type = "links";
    else d_type = "news";
    if (data && data[d_type]) {
      const founded = data[d_type].find(
        (item) => String(item.id) === String(id)
      );

      if (founded) {
        setCurrentDetail({
          title: founded.title,
          body: founded.body,
          active: founded.active === true ? "true" : "false",
          link: founded.link,
          announcement_type: d_type,
          created_at: founded.created_at,
        });
        setOldData({
          title: founded.title,
          body: founded.body,
          active: founded.active === true ? "true" : "false",
          link: founded.link,
          announcement_type: founded.announcement_type,
          created_at: founded.created_at,
        });
      }
    }
  }, [data]);

  return (
    <>
      <Header
        icon={<NotificationsIcon />}
        title={"Notification Details"}
        subTitle={"Notifications"}
      />
      <DetailSection {...{ ...oldData }} />
      <NotificationForm
        submitText={"Send Notification"}
        id={id}
        currentDetail={currentDetail}
        setCurrentDetail={setCurrentDetail}
        submitNotificationHandler={submitNotificationHandler}
        loading={loading}
      />
    </>
  );
}

const DetailSection = ({
  title,
  body,
  active,
  link,
  announcement_type,
  created_at,
}) => {
  return (
    <div className='border p-8 my-6 grid grid-cols-3 relative gap-4 rounded-md bg-[#FBFCFF]'>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Announcement Type
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {announcement_type
              ? announcement_type.charAt(0).toUpperCase() +
                announcement_type.slice(1)
              : "Unknown Type"}
          </p>
        </div>
      </div>
      {title ? (
        <div className='card'>
          <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
            Title
          </p>
          <div className='flex gap-2 items-center'>
            <PiSubtitlesLight />
            <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
              {title}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {body ? (
        <div className='card'>
          <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
            Description
          </p>
          <div className='flex gap-2 items-center'>
            <FileIcon />
            <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
              {body ? body : "---"}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {link ? (
        <div className='card'>
          <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
            Link
          </p>
          <div className='flex gap-2 items-center'>
            <LinkIcon />
            <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
              {link}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {active ? (
        <div className='card'>
          <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
            Active
          </p>
          <div className='flex gap-2 items-center'>
            <AvatarIcon />
            <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
              {active}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Created At
        </p>
        <div className='flex gap-2 items-center'>
          <IoCreateOutline />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {created_at ? formatDate(created_at) : "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

const NotificationForm = ({
  submitText,
  id,
  submitNotificationHandler,
  currentDetail,
  setCurrentDetail,
  loading,
}) => {
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCurrentDetail({ ...currentDetail, [name]: value });
  };

  const renderInputFields = () => {
    const type = currentDetail.announcement_type.toLocaleLowerCase();
    switch (type) {
      case "announcement":
        return (
          <>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Title
              </label>
              <input
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                type='text'
                value={currentDetail.title}
                name='title'
                onChange={onChangeHandler}
              />
            </div>
            <div className='email shrink-0 space-y-2'>
              <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Description
              </label>
              <textarea
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                value={currentDetail.body}
                name='body'
                onChange={onChangeHandler}
              ></textarea>
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={onChangeHandler}
                value={currentDetail.active}
                name='active'
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              >
                <option value=''>---</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
          </>
        );
      case "news":
        return (
          <>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Title
              </label>
              <input
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                type='text'
                value={currentDetail.title}
                name='title'
                onChange={onChangeHandler}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Link
              </label>
              <input
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                type='text'
                value={currentDetail.link}
                name='link'
                onChange={onChangeHandler}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={onChangeHandler}
                value={currentDetail.active}
                name='active'
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              >
                <option value=''>---</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
            <div className='email shrink-0 space-y-2'>
              <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Description
              </label>
              <textarea
                style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                onChange={onChangeHandler}
                value={currentDetail.body}
                name='body'
              ></textarea>
            </div>{" "}
          </>
        );
      case "links":
        return (
          <>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Title
              </label>
              <input
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                type='text'
                value={currentDetail.title}
                name='title'
                onChange={onChangeHandler}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Link
              </label>
              <input
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
                type='text'
                value={currentDetail.link}
                name='link'
                onChange={onChangeHandler}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={onChangeHandler}
                value={currentDetail.active}
                name='active'
                style={{
                  border: "1px rgba(34, 31, 185, 0.14) solid",
                }}
                className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              >
                <option value=''>---</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-0 bg-white rounded-lg shadow pb-12'
    >
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Announcement Type
          </label>
          <select
            onChange={(e) => onChangeHandler(e)}
            value={currentDetail && currentDetail.announcement_type}
            name='announcement_type'
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
          >
            <option value=''>---</option>
            <option value='news'>News</option>
            <option value='links'>Links</option>
            <option value='announcement'>Announcement</option>
          </select>
        </div>
        {renderInputFields()}
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={() => navigate(-1)}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 hover:bg-purple-200 duration-200 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            submitNotificationHandler(id, currentDetail);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
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
