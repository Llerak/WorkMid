import React from "react";
import { useState } from "react";
import {
  plusSquareIcon,
  calendarIcon,
  discIcon,
  loaderIcon,
  maximizeIcon,
  unlockIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

const BasicTaskList = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="flex flex-col border rounded-md max-w-4xl">
      <a
        href="#"
        className="flex pb-4"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {plusSquareIcon}
        <input
          type="text"
          placeholder="Type to add new task"
          className="cursor-pointer font-serif  outline-none"
        />
      </a>

      {showDropDown && (
        <div className="flex border-t justify-between">
          <div className="flex p-1">
            <ButtonTaskList className="mr-8">{maximizeIcon}Open</ButtonTaskList>
            <ButtonTaskList>{calendarIcon}Today</ButtonTaskList>
            <ButtonTaskList>{unlockIcon}Public</ButtonTaskList>
            <ButtonTaskList>{discIcon}Normal</ButtonTaskList>
            <ButtonTaskList>{loaderIcon}Estimation</ButtonTaskList>
          </div>
          <div className="flex items-center">
            <ButtonTaskList>Cancel</ButtonTaskList>
            <ButtonTaskList>Ok</ButtonTaskList>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicTaskList;
