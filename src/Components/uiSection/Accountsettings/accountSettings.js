import React from "react";
import { useState } from "react";
import PersonalDetails from "../../uiGroup/Accountsettings/personalDetails";
import Security from "../../uiGroup/Accountsettings/security";
import SettingsThree from "../../uiGroup/Accountsettings/settingsThree";
import SettingsFour from "../../uiGroup/Accountsettings/settingsFour";
import SettingsFive from "../../uiGroup/Accountsettings/settingsFive";

function AccountSettings() {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <div className=" flex justify-start">
      <div className=" flex flex-col mr-[100px] ml-4 ">
        <button
          className={`${
            activeTab == "personal"
              ? "bg-[#F9F9FE]  rounded-lg py-2 pl-2 pr-10  text-[#1F5095]"
              : "text-[#8C8C8C]"
          } text-base  leading-5 font-medium mb-6 py-2 pl-2 text-left`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Details
        </button>
        <button
          className={`${
            activeTab == "Security"
              ? "bg-[#F9F9FE]  rounded-lg py-2 pl-2 pr-10  text-[#1F5095]"
              : "text-[#8C8C8C]"
          } text-base  leading-5 font-medium mb-6 text-left py-2 pl-2`}
          onClick={() => setActiveTab("Security")}
        >
          Security
        </button>
        <button
          className={`${
            activeTab == "three"
              ? "bg-[#F9F9FE]  rounded-lg py-2 pl-2 pr-10  text-[#1F5095]"
              : "text-[#8C8C8C]"
          } text-base  leading-5 font-medium mb-6 text-left py-2 pl-2`}
          onClick={() => setActiveTab("three")}
        >
          Setting Option 3
        </button>
        <button
          className={`${
            activeTab == "four"
              ? "bg-[#F9F9FE]  rounded-lg py-2 pl-2 pr-10  text-[#1F5095]"
              : "text-[#8C8C8C]"
          } text-base  leading-5 font-medium mb-6 text-left py-2 pl-2`}
          onClick={() => setActiveTab("four")}
        >
          Setting Option 4
        </button>
        <button
          className={`${
            activeTab == "five"
              ? "bg-[#F9F9FE]  rounded-lg py-2 pl-2 pr-10  text-[#1F5095]"
              : "text-[#8C8C8C]"
          } text-base  leading-5 font-medium mb-6 text-left py-2 pl-2`}
          onClick={() => setActiveTab("five")}
        >
          Setting Option 5
        </button>
      </div>
      {activeTab == "personal" && <PersonalDetails />}
      {activeTab == "Security" && <Security />}
      {activeTab == "three" && <SettingsThree />}
      {activeTab == "four" && <SettingsFour />}
      {activeTab == "five" && <SettingsFive />}
    </div>
  );
}

export default AccountSettings;
