import { useEffect, useState } from "react";
import { plusSquareIcon } from "../assets/Icons";
import TaskMenu from "./TaskMenu";

const BasicTaskList = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	const [inputText, setInputText] = useState("");

	const borderStyle = "border rounded-md";

	const handleWriting = (e: any) => {
		const { value } = e.target;
		setInputText(value);
	};

	//* Input Focus Watcher
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

	//* Button Accept Watcher
	useEffect(() => {
		const buttonOk = document.getElementById("button-ok");
		if (buttonOk != null) {
			if (inputText != "") buttonOk.innerHTML = "Add";
			else if (inputText == "") buttonOk.innerHTML = "Ok";
		}
	}, [inputText]);

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
				/>
			</div>

			{menuDisplay && <TaskMenu />}
		</div>
	);
};

export default BasicTaskList;
