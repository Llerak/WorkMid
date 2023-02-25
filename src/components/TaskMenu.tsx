import { Dispatch, useRef } from "react";
import {
	maximizeIcon,
	calendarIcon,
	unlockIcon,
	discIcon,
	loaderIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

type State = {
	value: any;
	set: Dispatch<any>;
};
interface TaskMenuProps {
	text: State;
	menu: State;
}

const TaskMenu = ({ text, menu }: TaskMenuProps) => {
	//! References
	const todayButton = useRef(null);
	const publicButton = useRef(null);
	const normalButton = useRef(null);
	const estimationButton = useRef(null);
	const buttonOk = useRef(null);

	const handleCancel = () => {
		text.set("");
		menu.set(false);
	};

	const handleOK = () => {
		if (text.value === "") menu.set(false);
	};

	return (
		<div className="flex justify-between border-t p-1 shadow-lg">
			<div className="flex">
				<ButtonTaskList className="mr-8">{maximizeIcon}Open</ButtonTaskList>
				<ButtonTaskList className="disabled-button" id="today-button">
					{calendarIcon}Today
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" id="public-button">
					{unlockIcon}Public
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" id="normal-button">
					{discIcon}Normal
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" id="estimation-button">
					{loaderIcon}Estimation
				</ButtonTaskList>
			</div>
			<div className="flex">
				<ButtonTaskList onClick={handleCancel}>Cancel</ButtonTaskList>
				<ButtonTaskList
					className="text-white !bg-[#0d54ce]"
					onClick={handleOK}
					id="button-ok"
				>
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};

export default TaskMenu;
