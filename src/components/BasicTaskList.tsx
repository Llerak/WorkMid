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
	const [menuDisplay, setMenuDisplay] = useState(false);
	const [inputText, setInputText] = useState("");

	const borderStyle = "border rounded-md";

	const handleNewTaskInput = (e: any) => {
		setInputText(e.target.value);
		console.log(inputText);
	};

	return (
		<div
			className={"flex flex-col content-center " + (menuDisplay && borderStyle)}
		>
			<div className="flex py-2">
				{plusSquareIcon}
				<input
					type="text"
					onChange={handleNewTaskInput}
					placeholder="Type to add new task"
					className="cursor-pointer font-serif  outline-none"
				/>
			</div>

			{menuDisplay && (
				<div
					className="flex border-
         justify-between border-t"
				>
					<div className="flex p-1">
						<ButtonTaskList className="mr-8 disabled">
							{maximizeIcon}Open
						</ButtonTaskList>
						<ButtonTaskList className="disabled-button">
							{calendarIcon}Today
						</ButtonTaskList>
						<ButtonTaskList className="disabled-button">
							{unlockIcon}Public
						</ButtonTaskList>
						<ButtonTaskList className="disabled-button">
							{discIcon}Normal
						</ButtonTaskList>
						<ButtonTaskList className="disabled-button">
							{loaderIcon}Estimation
						</ButtonTaskList>
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
