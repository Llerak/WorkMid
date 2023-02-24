import { useEffect, useRef, useState } from "react";
import { plusSquareIcon } from "../assets/Icons";
import TaskMenu from "./TaskMenu";

const BasicTaskList = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	const [inputText, setInputText] = useState("");

	const borderStyle = "border rounded-md";

	const handleWriting = (e: any) => {
		const { value } = e.currentTarget;
		setInputText(value);
	};

	const input = useRef<HTMLInputElement>(null);

	//* Input Focus Watcher
	const handleFocusInput = () => {
		console.log("input focus, menu true");
		setMenuDisplay(true);

		const a = (e: MouseEvent) => {
			console.log("click");
			let clickOut = e.target !== input.current;
			let inputEmpty = input.current?.value === "";

			if (clickOut && inputEmpty) {
				setMenuDisplay(false);
				window.removeEventListener("click", a);
			}
		};

		window.addEventListener("click", a);
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
					onFocus={handleFocusInput}
					placeholder="Type to add new task"
					className="cursor-pointer font-serif w-full outline-none"
					ref={input}
					value={inputText}
				/>
			</div>

			{menuDisplay && <TaskMenu />}
		</div>
	);
};

export default BasicTaskList;
