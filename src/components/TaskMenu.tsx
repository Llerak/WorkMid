import { Dispatch, useEffect, useRef } from "react";
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
	const todayButtonRef = useRef<HTMLElement>(null);
	const publicButtonRef = useRef<HTMLElement>(null);
	const normalButtonRef = useRef<HTMLElement>(null);
	const estimationButtonRef = useRef<HTMLElement>(null);
	const buttonOkRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const Buttons = [
			todayButtonRef,
			publicButtonRef,
			normalButtonRef,
			estimationButtonRef,
		];

		const buttonOk =
			buttonOkRef.current === null ? new HTMLElement() : buttonOkRef.current;

		const buttonState = (buttons: typeof Buttons, state: boolean) => {
			buttons.map((button) =>
				state
					? button.current?.classList.add("disabled-button")
					: button.current?.classList.remove("disabled-button")
			);
		};

		if (text.value == "") {
			buttonOk.innerHTML = "Ok";
			buttonState(Buttons, true);
		} else {
			buttonOk.innerHTML = "Add";
			buttonState(Buttons, false);
		}
	}, [text.value]);

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
				<ButtonTaskList
					className="disabled-button"
					reference={todayButtonRef}
					id="today-button"
				>
					{calendarIcon}Today
				</ButtonTaskList>
				<ButtonTaskList
					className="disabled-button"
					reference={publicButtonRef}
					id="public-button"
				>
					{unlockIcon}Public
				</ButtonTaskList>
				<ButtonTaskList
					className="disabled-button"
					reference={normalButtonRef}
					id="normal-button"
				>
					{discIcon}Normal
				</ButtonTaskList>
				<ButtonTaskList
					className="disabled-button"
					reference={estimationButtonRef}
					id="estimation-button"
				>
					{loaderIcon}Estimation
				</ButtonTaskList>
			</div>
			<div className="flex">
				<ButtonTaskList onClick={handleCancel}>Cancel</ButtonTaskList>
				<ButtonTaskList
					className="text-white !bg-[#0d54ce]"
					onClick={handleOK}
					id="button-ok"
					reference={buttonOkRef}
				>
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};

export default TaskMenu;
