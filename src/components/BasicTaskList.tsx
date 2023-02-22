import { useState } from "react";
import {
	calendarIcon,
	discIcon,
	loaderIcon,
	maximizeIcon,
	plusSquareIcon,
	unlockIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

const BasicTaskList = () => {
	const [showDropDown, setShowDropDown] = useState(false);

	const borderStyle = "border rounded-md";

	return (
		<div
			className={
				"flex flex-col content-center " + (showDropDown && borderStyle)
			}
		>
			<div
				className="flex py-2"
				onChange={() => setShowDropDown(!showDropDown)}
			>
				{plusSquareIcon}
				<input
					type="text"
					placeholder="Type to add new task"
					className="cursor-pointer font-serif  outline-none"
				/>
			</div>

			{showDropDown && (
				<div
					className="flex justify-between border-t p-1"
        >
          <div className="flex">
            <ButtonTaskList  className="mr-8">
              {maximizeIcon}Open
            </ButtonTaskList>
            <ButtonTaskList className="disabled-button">{calendarIcon}Today</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{unlockIcon}Public</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{discIcon}Normal</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{loaderIcon}Estimation</ButtonTaskList>
          </div>
          <div className="flex">
            <ButtonTaskList >Cancel</ButtonTaskList>
            <ButtonTaskList className="bg-[#0D55CF] text-white">Ok</ButtonTaskList>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicTaskList;
