import { useEffect, useState } from "react";
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

	useEffect(() => {
		if (!menuDisplay) return;
		const input = document.getElementById("inputTask");

		const watcherInputFocus = (e: Event) => {
			if (e.target === input) return;
			if (inputText === "") {
				setMenuDisplay(false);
				return () => window.removeEventListener("click", watcherInputFocus);
			}
		};

		window.addEventListener("click", watcherInputFocus);
	}, [inputText]);

	const borderStyle = "border rounded-md";

	const handleWriting = (e: any) => {
		const { value } = e.target;
		setInputText(value);
	};

	return (
		<div
			className={"flex flex-col content-center " + (menuDisplay && borderStyle)}
		>
			<div className="flex py-2">
				{plusSquareIcon}
				<input
					type="text"
					onChange={handleWriting}
					onFocus={() => setMenuDisplay(true)}
					placeholder="Type to add new task"
					className="cursor-pointer font-serif w-full outline-none"
					id="inputTask"
				/>
			</div>

			{menuDisplay && (
				<div className="flex justify-between border-t p-1">
					<div className="flex">
						<ButtonTaskList className="mr-8">{maximizeIcon}Open</ButtonTaskList>
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
					<div className="flex">
						<ButtonTaskList>Cancel</ButtonTaskList>
						<ButtonTaskList className="bg-[#0D55CF] text-white">
							Ok
						</ButtonTaskList>
					</div>
				</div>
			)}
		</div>
	);
};

export default BasicTaskList;
