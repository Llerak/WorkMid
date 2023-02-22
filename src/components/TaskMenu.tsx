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
				<ButtonTaskList className="bg-[#0D55CF] text-white" id="button-ok">
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};

export default TaskMenu;
