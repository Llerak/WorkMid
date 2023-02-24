import {
	maximizeIcon,
	calendarIcon,
	unlockIcon,
	discIcon,
	loaderIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

const TaskMenu = () => {
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
				<ButtonTaskList>Cancel</ButtonTaskList>
				<ButtonTaskList className="text-white !bg-[#0d54ce]" id="button-ok">
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};

export default TaskMenu;
