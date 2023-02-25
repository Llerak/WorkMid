import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
	calendarIcon,
	discIcon,
	loaderIcon,
	maximizeIcon,
	unlockIcon,
} from "../../assets/Icons";
import ButtonTaskList from "./ButtonTaskList";

//! TYPOS AND INTERFACES

type State = {
	value: any;
	set: Dispatch<SetStateAction<any>>;
};
interface TaskMenuProps {
	text: State;
	menu: State;
}

//! START COMPONENT
const TaskMenu = ({ text, menu }: TaskMenuProps) => {
	//! references

	const todayButtonRef = useRef<HTMLDivElement>(null);
	const publicButtonRef = useRef<HTMLDivElement>(null);
	const normalButtonRef = useRef<HTMLDivElement>(null);
	const estimationButtonRef = useRef<HTMLDivElement>(null);
	const buttonOkRef = useRef<HTMLDivElement>(null);

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
			buttonOkRef.current === null ? new HTMLDivElement() : buttonOkRef.current;

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
				<ButtonTaskList Ref={todayButtonRef}>
					{calendarIcon}Today
				</ButtonTaskList>
				<ButtonTaskList Ref={publicButtonRef}>
					{unlockIcon}Public
				</ButtonTaskList>
				<ButtonTaskList Ref={normalButtonRef}>{discIcon}Normal</ButtonTaskList>
				<ButtonTaskList Ref={estimationButtonRef}>
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
