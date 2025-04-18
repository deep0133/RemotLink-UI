import { useEffect, useState } from "react";
import { NotificationsIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
export default function SendNotification({
  loading,
  submitNotificationHandler,
}) {
  const { name } = useParams();
  return (
    <>
      <Header
        icon={<NotificationsIcon />}
        title={"Send " + name}
        subTitle={"Notifications"}
      />
      <Hero name={"Send " + name} description={`Send ${name} from here`} />
      <NotificationForm
        submitText={"Send " + name}
        loading={loading}
        {...{
          submitNotificationHandler,
        }}
      />
    </>
  );
}

const NotificationForm = ({
  submitText,
  submitNotificationHandler,
  loading,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ann_type, setAnnType] = useState("");
  const [active, setActive] = useState(null);
  const [link, setLink] = useState("");

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setAnnType(name);
  }, [name]);

  const renderInputFields = () => {
    const type = ann_type.toLocaleLowerCase();
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={(e) => setActive(e.target.value === "true")}
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={(e) => setActive(e.target.value === "true")}
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </div>
            <div className=' shrink-0 space-y-2'>
              <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
                Active
              </label>
              <select
                onChange={(e) => setActive(e.target.value === "true")}
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
        <div className=' shrink-0 space-y-2'>
          <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Notification type
          </label>
          <select
            value={ann_type}
            onChange={(e) => {
              setAnnType(e.target.value);
            }}
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
          >
            <option value='links'>Links</option>
            <option value='news'>News</option>
            <option value='announcement'>Announcement</option>
          </select>
        </div>
        {renderInputFields()}
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={() => navigate(-1)}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            submitNotificationHandler({
              title,
              body: description,
              active,
              link,
              announcement_type: ann_type.toLocaleLowerCase(),
            });
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
