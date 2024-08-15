import React from "react";
import PropTypes from "prop-types";

import userIcon from "../../assets/ph_user-bold.svg";
import SettingsButton from "../Buttons/SettingsButton";
import InputBox from "../InputBox/InputBox";
import CurrencyDropDown from "../InputBox/CurrencyDropDown";

const UserSetsModal = ({ title }) => {
  return (
    <>
      <div className="fixed w-screen h-screen bg-stone-950 z-10 opacity-50 top-0 left-0 m-auto overflow-hidden"></div>
      <div className="w-[500px] h-[461px] bg-neutral-900 opacity-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl px-10 py-8">
        <p className="text-2xl pt-3">{title}</p>
        <div className="flex flex-col items-center pt-10">
          <div className="h-[100px] w-[100px] bg-neutral-950 flex items-center justify-center rounded-full">
            <img src={userIcon} alt="user-icon" className=" " />
          </div>
          <div className="flex gap-3 pt-7">
            <SettingsButton title="Upload new photo" />
            <SettingsButton title="Remove" />
          </div>
          <div className="grid grid-cols-6 items-center w-full mt-4 gap-2 text-white">
            <div className="col-span-2 relative">
              <CurrencyDropDown
                display="block"
                border="border-2 border-neutral-500"
                extraData="profileSettingsCurrencyBox"
              />
            </div>
            <div className="col-span-4">
              <InputBox
                type="name"
                title=""
                placeholder=""
                backgroundColor="bg-neutral-900"
                name="name"
              />
            </div>
          </div>
          <button className="w-full my-3 bg-green-400 text-black py-3 px-10 rounded-3xl font-medium hover:bg-green-300">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSetsModal;

UserSetsModal.propTypes = {
  title: PropTypes.string.isRequired,
};
