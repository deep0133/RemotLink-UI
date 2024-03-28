import { useNavigate } from "react-router-dom";
import {
  DeleteIcon,
  EditICon,
  NotificationsIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import { NotificationRightMenu } from "../../data";
import useDelete from "../../hooks/useDelete";
import { LuLoader2 } from "react-icons/lu";
// import Navigation from "../../components/RightCommonComponents/Navigation";

export default function LatestNews({ data }) {
  const { deleteNotificationLoading, handleDeleteNotification } = useDelete();

  const deleteNotification = async (id) => {
    await handleDeleteNotification("api/announcement/delete/" + id);
  };
  return (
    <>
      <Header
        icon={<NotificationsIcon />}
        title={"Latest News"}
        subTitle={"Notifications"}
      />
      <Navigation data={NotificationRightMenu} />
      <Hero name={"See Latest News"} description={`See Latest News here`} />
      <Card
        data={data}
        deleteNotification={deleteNotification}
        loading={deleteNotificationLoading}
      />
    </>
  );
}

const Card = ({ data, deleteNotification, loading }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg relative overflow-hidden p-3 mt-5 ml-3 '
    >
      {loading && (
        <div className='absolute w-full h-full backdrop:blur-md '>
          <div className='w-full h-full relative -inset-3 bg-black/10 flex justify-center items-center'>
            <div className='w-fit animate-spin '>
              <LuLoader2 />
            </div>
          </div>
        </div>
      )}
      <div className='row-1 grid grid-cols-12 w-full px-2 pb-5 gap-5'>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-4 text-sm font-medium font-Poppins leading-normal'>
          Link
        </div>
        <div className='text-slate-400 -ml-1 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Description
        </div>
        <div className='text-slate-400 text-sm col-span-2 text-center -ml-1.5 font-medium font-Poppins leading-normal'>
          Active
        </div>
        <div className='text-slate-400 text-sm col-span-2 text-center -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {data?.length > 0
          ? data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-12 w-full gap-5 '>
                    <h3 className='text-indigo-900 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.title ? val.title : "---"}
                    </h3>
                    <div className='text-indigo-900 line-clamp-1 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.link ? val.link : "---"}
                    </div>

                    <div className='text-indigo-900 line-clamp-1 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.body ? val.body : "---"}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 text-center flex-1 text-sm font-medium font-Poppins leading-7'>
                      <input
                        type='checkbox'
                        name='active'
                        className='accent-blue-600 cursor-pointer'
                        checked={val.active}
                      />
                    </div>
                    <div className='action justify-center flex items-center col-span-2 text-center line-clamp-1 gap-3'>
                      <div
                        onClick={() => {
                          navigate(
                            "/admin/notifications/news/update/" + val.id
                          );
                        }}
                        className='cursor-pointer'
                      >
                        <EditICon />
                      </div>
                      <div
                        onClick={() => {
                          deleteNotification(val.id);
                        }}
                        className='cursor-pointer'
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No Data Found"}
      </div>
    </div>
  );
};
