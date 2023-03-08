import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
	calendarIcon,
	discIcon,
	loaderIcon,
	maximizeIcon,
	unlockIcon,
} from "../../../assets/Icons";
import Button from "./Button";

type State = {
	value: any;
	set: Dispatch<SetStateAction<any>>;
};
interface TaskMenuProps {
	text: State;
	menu: State;
}

//!
export default function Menu ({ text, menu }: TaskMenuProps) {
	
	//! references
	const todayButtonRef = useRef<HTMLDivElement>(null);
	const publicButtonRef = useRef<HTMLDivElement>(null);
	const normalButtonRef = useRef<HTMLDivElement>(null);
	const estimationButtonRef = useRef<HTMLDivElement>(null);
	const buttonOkRef = useRef<HTMLDivElement>(null);

	//! effects
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
				<Button className="mr-8">{maximizeIcon}Open</Button>
				<Button Ref={todayButtonRef}>{calendarIcon}Today</Button>
				<Button Ref={publicButtonRef}>{unlockIcon}Public</Button>
				<Button Ref={normalButtonRef}>{discIcon}Normal</Button>
				<Button Ref={estimationButtonRef}>{loaderIcon}Estimation</Button>
			</div>
			<div className="flex">
				<Button onClick={handleCancel}>Cancel</Button>
				<Button
					className="text-white !bg-[#0d54ce]"
					onClick={handleOK}
					Ref={buttonOkRef}
				>
					Ok
				</Button>
			</div>
		</div>
	);
};
