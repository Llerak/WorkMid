import { MouseEvent, useEffect, useRef, useState } from "react";
import { plusSquareIcon } from "../assets/Icons";
import TaskMenu from "./TaskMenu";

const BasicTaskList = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const spanRef = useRef<HTMLInputElement>(null);

	const [menuDisplay, setMenuDisplay] = useState(false);
	const [inputText, setInputText] = useState("");

	const borderStyle = "border rounded-md";

	//* capturar el  texto del input
	const handleWriting = (e: MouseEvent) => {
		const { value } = e.target as HTMLInputElement;
		setInputText(value);
	};

	//* Input Focus Watcher
	const handleFocusInput = () => {
		setMenuDisplay(true);

		const watcher = (e: MouseEvent) => {
			let clickOut = e.target !== inputRef.current;
			let inputEmpty = inputRef.current?.value === "";

			if (clickOut && inputEmpty) {
				setMenuDisplay(false);
				window.removeEventListener("click", watcher);
			}
		};

		window.addEventListener("click", watcher);
	};

	//* agregar el tratamiento del texto
	const handleSpan = (inputTextArray: string[]) => {
		const urlPattern =
			/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

		const RegularGmailPattern =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		inputTextArray.map((item) => {
			let newElement = document.createElement("a");

			newElement.innerText = item;
			newElement.style.marginRight = "4px";
			newElement.style.color = "#374359";
			newElement.style.pointerEvents = "none";

			const IsLink = (href: string): void => {
				newElement.style.pointerEvents = "auto";
				newElement.href = href;
			};

			//type check
			switch (item[0]) {
				case "@":
					newElement.style.color = "#11ab78";
					IsLink("#");
					break;
				case "#":
					newElement.style.color = "#7130e6";
					IsLink("#");
					break;
				default:
					if (RegularGmailPattern.test(item)) {
						newElement.style.color = "#F7A43A";
						IsLink("#");
					} else if (urlPattern.test(item)) {
						newElement.style.color = "#1588FF";
						IsLink("#");
					}
					break;
			}

			spanRef.current?.appendChild(newElement);
		});
	};

	//* Text input change color
	useEffect(() => {
		const textColorSpan = spanRef.current;
		const inputTextElement = inputRef?.current;
		let inputTextArray: string[] = inputText.split(" ");

		if (textColorSpan != null) {
			textColorSpan.innerHTML = "";

			handleSpan(inputTextArray);

			if (textColorSpan.innerHTML != "" && inputTextElement != null) {
				inputTextElement.style.caretColor = "black";
				inputTextElement.style.cursor = "text";
			}
		}
	}, [inputText]);

	useEffect(() => {
		const buttonOk = document.getElementById("button-ok");

		const AddDisabled = () => {
			document.getElementById("today-button")?.classList.add("disabled-button");
			document
				.getElementById("public-button")
				?.classList.add("disabled-button");
			document
				.getElementById("normal-button")
				?.classList.add("disabled-button");
			document
				.getElementById("estimation-button")
				?.classList.add("disabled-button");
		};

		const DeletedDisabled = () => {
			document
				.getElementById("today-button")
				?.classList.remove("disabled-button");
			document
				.getElementById("public-button")
				?.classList.remove("disabled-button");
			document
				.getElementById("normal-button")
				?.classList.remove("disabled-button");
			document
				.getElementById("estimation-button")
				?.classList.remove("disabled-button");
		};

		if (buttonOk != null) {
			if (inputText == "") {
				buttonOk.innerHTML = "Ok";
				AddDisabled();
			} else {
				buttonOk.innerHTML = "Add";
				DeletedDisabled();
			}
		}
	}, [inputText]);

	return (
		<div
			className={
				"flex flex-col content-center w-4/5 " + (menuDisplay && borderStyle)
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
				<TaskMenu
					text={{ value: inputText, set: setInputText }}
					menu={{ value: menuDisplay, set: setMenuDisplay }}
				/>
			)}
		</div>
	);
};
export default BasicTaskList;
