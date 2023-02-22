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

const initialState = {
	menuDisplay: false,
	textInput: "",
};
const BasicTaskList = () => {
	const [showDropDown, setShowDropDown] = useState(initialState);

	const borderStyle = "border rounded-md";

	return (
		<div
			className={
				"flex flex-col content-center " + (showDropDown && borderStyle)
			}
		>
			<div
				className="flex py-2"
				onFocus={() => setShowDropDown({ menuDisplay: true, ...textInput })}
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
					className="flex border-
         justify-between border-t"
        >
          <div className="flex p-1">
            <ButtonTaskList  className="mr-8 disabled">
              {maximizeIcon}Open
            </ButtonTaskList>
            <ButtonTaskList className="disabled-button">{calendarIcon}Today</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{unlockIcon}Public</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{discIcon}Normal</ButtonTaskList>
            <ButtonTaskList className="disabled-button">{loaderIcon}Estimation</ButtonTaskList>
          </div>
          <div className="flex items-center">
            <ButtonTaskList >Cancel</ButtonTaskList>
            <ButtonTaskList >Ok</ButtonTaskList>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicTaskList;
