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
					className="flex border-
         justify-between border-t"
				>
					<div className="flex p-1">
						<ButtonTaskList href="#" className="mr-8 disabled">
							{maximizeIcon}Open
						</ButtonTaskList>
						<ButtonTaskList href="#">{calendarIcon}Today</ButtonTaskList>
						<ButtonTaskList href="#">{unlockIcon}Public</ButtonTaskList>
						<ButtonTaskList href="#">{discIcon}Normal</ButtonTaskList>
						<ButtonTaskList href="#">{loaderIcon}Estimation</ButtonTaskList>
					</div>
					<div className="flex items-center">
						<ButtonTaskList href="#">Cancel</ButtonTaskList>
						<ButtonTaskList href="#">Ok</ButtonTaskList>
					</div>
				</div>
			)}
		</div>
	);
};

export default BasicTaskList;
