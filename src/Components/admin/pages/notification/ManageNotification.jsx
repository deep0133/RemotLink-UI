import {
  DeleteIcon,
  EditICon,
  NotificationsIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import SearchFilter from "../../components/category/SearchFilter";
import Navigation from "../../components/RightCommonComponents/Navigation";
import { NotificationRightMenu } from "../../data";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import sortByCreatedAt from "../../utils/sortByCreatedAt";
import { useEffect, useState } from "react";
import Loading from "../../components/Loader/Loader";
import { formatDate } from "../../utils/formateData";
export default function ManageNotification({
  data,
  fetchLoading,
  deleteNotification,
  delLoading,
}) {
  const [notiData, setNotiData] = useState(data);

  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setNotiData(data);
  }, [data]);

  useEffect(() => {
    setNotiData(() => {
      return sortByCreatedAt(notiData, sort);
    });
  }, [sort]);

  const searchHandler = (val) => {
    setNotiData((prev) =>
      data.filter(
        (obj) =>
          obj.title && obj.title.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header icon={<NotificationsIcon />} title={"Notifications"} />
      <Navigation data={NotificationRightMenu} />
      <Hero
        name={"Manage all Notifications"}
        description={`Manage the notifications here.`}
        icon={<NotificationsIcon />}
        btnText={`Send Notification`}
        btnLink={"/admin/notifications/send"}
      />
      <SearchFilter searchHandler={searchHandler} setSort={setSort} />
      <Card
        data={notiData}
        loading={delLoading}
        deleteNotification={deleteNotification}
        fetchLoading={fetchLoading}
      />
    </>
  );
}

const Card = ({ data, loading, deleteNotification, fetchLoading }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className={`rounded-lg relative mt-5 ml-3  max-h-[380px] ${
        loading ? "overflow-hidden" : "overflow-auto"
      }`}
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
      <div className='row-1 sticky top-0 border-b bg-white grid py-3 px-5  grid-cols-12 w-full gap-5 '>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-4 text-sm font-medium font-Poppins leading-normal'>
          Description
        </div>
        <div className='text-slate-400 -ml-1 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Created At
        </div>
        <div className='text-slate-400 text-sm col-span-3 text-center -ml-1.5 font-medium font-Poppins leading-normal'>
          Active
        </div>
        <div className='text-slate-400 text-sm col-span-1 text-center -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>
      <div className='card-container flex-1 p-3 w-full overflow-auto'>
        {!fetchLoading ? (
          data && data.length > 0 ? (
            data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-12 w-full gap-5 '>
                    <h3 className='text-indigo-900 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.title ? val.title : "---"}
                    </h3>
                    <div className='text-indigo-900 line-clamp-1 col-span-4 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.body ? val.body : "---"}
                    </div>

                    <div className='text-indigo-900 line-clamp-1 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.created_at ? formatDate(val.created_at) : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-1 text-center flex-1 text-sm font-medium font-Poppins leading-7'>
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
                            "/admin/notifications/announcement/update/" + val.id
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
          ) : (
            <div className='text-lg p-3'>No Data Found</div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
