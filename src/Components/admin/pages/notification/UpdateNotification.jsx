import { useEffect, useState } from "react";
import { AvatarIcon, NotificationsIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { LuLoader2 } from "react-icons/lu";
import useUpdate from "../../hooks/useUpdate";
export default function UpdateNotification({ data }) {
  const { updateNotificationLoading, handleUpdateNotification } = useUpdate();
  const [id, setId] = useState(null);
  const [currentDetail, setCurrentDetail] = useState({
    title: "",
    body: "",
    active: "",
    link: "",
    announcement_type: "",
    created_at: "",
  });

  const [oldData, setOldData] = useState({});

  useEffect(() => {
    let path = window.location.pathname;
    let url = path.split("/");
    const id = url[url.length - 1];
    setId(id);
    let d_type = "";
    if (path.includes("announcement")) d_type = "announcement";
    else if (path.includes("link")) d_type = "link";
    else d_type = "news";
    if (data) {
      const founded = data[d_type].find(
        (item) => String(item.id) === String(id)
      );

      if (founded) {
        setCurrentDetail({
          title: founded.title,
          body: founded.body,
          active: founded.active === true ? "true" : "false",
          link: founded.link,
          announcement_type: founded.announcement_type,
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

  const submitNotificationHandler = () => {
    handleUpdateNotification("api/announcement/update/" + id, currentDetail);
  };

  const cancelButton = () => {
    setCurrentDetail(oldData);
  };

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
        currentDetail={currentDetail}
        setCurrentDetail={setCurrentDetail}
        submitNotificationHandler={submitNotificationHandler}
        loading={updateNotificationLoading}
        cancelButton={cancelButton}
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
            {announcement_type}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Title
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {title ? title : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Description
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {body ? body : "---"}
          </p>
        </div>
      </div>

      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Link
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {link ? link : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Active
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {active ? active : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Created At
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {created_at ? created_at : "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

const NotificationForm = ({
  submitText,
  submitNotificationHandler,
  currentDetail,
  setCurrentDetail,
  loading,
  cancelButton,
}) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCurrentDetail({ ...currentDetail, [name]: value });
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
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Title
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='title'
            value={currentDetail.title}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Link
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='link'
            value={currentDetail.link}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Active
          </label>
          <select
            onChange={(e) => onChangeHandler(e)}
            value={currentDetail.active}
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            name='active'
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
            rows={"auto"}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='body'
            value={currentDetail.body}
            onChange={(e) => onChangeHandler(e)}
          ></textarea>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={cancelButton}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 hover:bg-purple-200 duration-200 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            submitNotificationHandler();
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