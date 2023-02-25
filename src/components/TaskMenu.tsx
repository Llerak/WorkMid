import React, { Dispatch, useEffect, useRef } from "react";
import {
	calendarIcon,
	discIcon,
	loaderIcon,
	maximizeIcon,
	unlockIcon,
} from "../assets/Icons";
import ButtonTaskList from "./modules/ButtonTaskList";

//! TYPOS AND INTERFACES

type State = {
	value: any;
	set: Dispatch<React.SetStateAction<any>>;
};
interface TaskMenuProps {
	text: State;
	menu: State;
}

//! START COMPONENT
const TaskMenu = ({ text, menu }: TaskMenuProps) => {
	//! references
	const todayButtonRef = useRef<HTMLElement>(null);
	const publicButtonRef = useRef<HTMLElement>(null);
	const normalButtonRef = useRef<HTMLElement>(null);
	const estimationButtonRef = useRef<HTMLElement>(null);
	const buttonOkRef = useRef<HTMLElement>(null);

	//! effects
	//* ButtonAllower
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

	//! handlers
	const handleCancel = () => {
		text.set("");
		menu.set(false);
	};

	const handleOK = () => {
		if (text.value === "") menu.set(false);
	};

	//! render
	return (
		<div className="flex justify-between border-t p-1 shadow-lg">
			<div className="flex">
				<ButtonTaskList className="mr-8">{maximizeIcon}Open</ButtonTaskList>
				<ButtonTaskList className="disabled-button" Ref={todayButtonRef}>
					{calendarIcon}Today
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" Ref={publicButtonRef}>
					{unlockIcon}Public
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" Ref={normalButtonRef}>
					{discIcon}Normal
				</ButtonTaskList>
				<ButtonTaskList className="disabled-button" Ref={estimationButtonRef}>
					{loaderIcon}Estimation
				</ButtonTaskList>
			</div>
			<div className="flex">
				<ButtonTaskList onClick={handleCancel}>Cancel</ButtonTaskList>
				<ButtonTaskList
					className="text-white !bg-[#0d54ce]"
					onClick={handleOK}
					Ref={buttonOkRef}
				>
					Ok
				</ButtonTaskList>
			</div>
		</div>
	);
};
//! END COMPONENT

export default TaskMenu;
