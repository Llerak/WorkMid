import React, { useEffect, useState, useRef, SyntheticEvent } from "react";
import { plusSquareIcon } from "../assets/Icons";
import TaskMenu from "./TaskMenu";

const BasicTaskList = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLInputElement>(null);

  const [menuDisplay, setMenuDisplay] = useState(false);
  const [inputText, setInputText] = useState("");

  const borderStyle = "border rounded-md";

  //* capturar el  texto del input
  const handleWriting = (e: any) => {
    const { value } = e.target;
    setInputText(value);
  };

  //* agregar el tratemienro del texto
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

  //* mientras el input este activo
  const handleInputFocus = () => {
    if (!menuDisplay) {
      console.log("set display true");
      setMenuDisplay(true);
      console.log("add event");
      window.addEventListener("click", watcher);
    }

    //* agregar una funcion observadora para el click
    function watcher(event: MouseEvent) {
      console.log("click");
      let clickOut = inputRef.current != event.target;
      let inputEmpty = inputRef.current?.value == "";

      if (clickOut && inputEmpty) {
        console.log("set display false");
        setMenuDisplay(false);
        console.log("remove event");
        window.removeEventListener("click", watcher);
      }
    }
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

  return (
    <div className="w-full flex justify-center">
      <div
        className={
          "flex flex-col content-center w-4/5 " + (menuDisplay && borderStyle)
        }
      >
        <div
          className="flex p-2 w-full h-10"
          onClick={() => setMenuDisplay(!menuDisplay)}
        >
          <i className="cursor-pointer">{plusSquareIcon}</i>
          <input
            type="text"
            onChange={handleWriting}
            placeholder="Type to add new task"
            className="font-serif w-full outline-none text-transparent flex"
            ref={inputRef}
          />
          <span
            className="absolute h-6 w-full flex items-center pointer-events-none ml-[29.0px] font-serif"
            ref={spanRef}
          ></span>
        </div>

        {menuDisplay && <TaskMenu />}
      </div>
    </div>
  );
};

export default BasicTaskList;
