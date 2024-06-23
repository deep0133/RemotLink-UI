import React from "react";

export default function MovingBanner({ notificationData }) {
  return (
    <div className='marquee'>
      {notificationData && (
        <div className='marquee-content'>
          <p className='marquee-item w-max p-3 text-nowrap text-[13px] font-medium font-inter text-white'>
            {notificationData?.announcement
              ?.map((val) => val.body)
              .join("  ||  ")}
          </p>
          <p className='marquee-item w-max p-3 text-nowrap text-[13px] font-medium font-inter text-white'>
            {notificationData?.announcement
              ?.map((val) => val.body)
              .join("  ||  ")}
          </p>
        </div>
      )}
    </div>
  );
}
