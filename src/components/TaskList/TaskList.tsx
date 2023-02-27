import { SyntheticEvent, useRef, useState } from "react";
import { plusSquareIcon } from "../../assets/Icons";
import Menu from "./elements/Menu";
import { insertText } from "./_utils";

const TaskList = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const spanRef = useRef<HTMLElement>(null);

	const [menuDisplay, setMenuDisplay] = useState(false);
	const [inputText, setInputText] = useState("");

	//* capturar el  texto
	const handleWriting = (e: SyntheticEvent) => {
		const { value } = e.target as HTMLInputElement;
		const colorSpan =
			spanRef.current === null ? new HTMLElement() : spanRef.current;
		const input =
			inputRef.current === null ? new HTMLInputElement() : inputRef.current;
		const textPieces = value.split(" ");

		// Set State Text
		setInputText(value);

		colorSpan.innerHTML = "";
		insertText(textPieces, colorSpan);

		input.style.caretColor = "black";
		input.style.cursor = "text";
	};

	//* Input Focus Watcher
	const handleFocusInput = () => {
		setMenuDisplay(true);

		const watcher = (e: globalThis.MouseEvent) => {
			let clickOut = e.target !== inputRef.current;
			let inputEmpty = inputRef.current?.value === "";

			if (clickOut && inputEmpty) {
				setMenuDisplay(false);
				window.removeEventListener("click", watcher);
			}
		};

		window.addEventListener("click", watcher);
	};

	return (
		<div
			className={
				"flex flex-col content-center w-4/5 " +
				(menuDisplay && "border rounded-md")
			}
		>
			<div className="flex p-2 w-full h-10">
				<i className="cursor-pointer" onClick={() => setMenuDisplay(true)}>
					{plusSquareIcon}
				</i>
				<input
					type="text"
					onChange={handleWriting}
					onFocus={handleFocusInput}
					placeholder="Type to add new task"
					className="font-serif w-full outline-none text-transparent flex"
					ref={inputRef}
					value={inputText}
				/>
				<span
					className="absolute h-6 w-full flex items-center pointer-events-none ml-[29.0px] font-serif"
					ref={spanRef}
				></span>
			</div>

			{menuDisplay && (
				<Menu
					text={{ value: inputText, set: setInputText }}
					menu={{ value: menuDisplay, set: setMenuDisplay }}
				/>
			)}
		</div>
	);
};
export default TaskList;
