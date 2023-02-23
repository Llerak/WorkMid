import React, { useEffect, useState, useRef} from "react";
import { plusSquareIcon } from "../assets/Icons";
import TaskMenu from "./TaskMenu";

const BasicTaskList = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLInputElement>(null);

  const [menuDisplay, setMenuDisplay] = useState(false);
  const [inputText, setInputText] = useState("");

  const borderStyle = "border rounded-md";

  const handleWriting = (e: any) => {
    const { value } = e.target;
    setInputText(value);
  };

  const handleSpan = (inputTextArray: string[]) => {

    const urlPattern =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

    const RegularGmailPattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

    inputTextArray.map((item)=>{
      let newSpan = document.createElement("span");

      newSpan.innerText = item;
      newSpan.style.marginRight = "4px";
      newSpan.style.color = "#374359";

      //type check
      switch (item[0]) {
        case "@":
          newSpan.style.color = "#11ab78";
          break;
        case "#":
          newSpan.style.color = "#7130e6";
          break;
        default:
          newSpan.style.color = urlPattern.test(item)?"#1588FF":
              RegularGmailPattern.test(item)?
                  "#F7A43A":newSpan.style.color;
          break;
      }

      spanRef.current?.appendChild(newSpan);

    })
  }

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
    <div
      className={"flex flex-col content-center" + (menuDisplay && borderStyle)}
    >
      <div className="flex p-2 w-full h-10">
        {plusSquareIcon}
        <input
          type="text"
          onChange={handleWriting}
          onFocus={() => setMenuDisplay(true)}
          placeholder="Type to add new task"
          className="cursor-pointer font-serif w-full outline-none text-transparent"
          ref = {inputRef}
        />
        <p
          className="absolute h-6 w-full flex items-center pointer-events-none ml-[29.0px] font-serif"
          ref = {spanRef}
        ></p>
      </div>

      {menuDisplay && <TaskMenu />}
    </div>
  );

};

export default BasicTaskList;
