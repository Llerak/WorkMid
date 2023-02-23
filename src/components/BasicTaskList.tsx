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

  //* Text input change color
  useEffect(() => {
    let inputTextArray: string[] = inputText.split(" ");
    console.log(inputTextArray);
    const textColorSpan = document.getElementById("text-color-span");
    if (textColorSpan != null) {
      textColorSpan.innerHTML = "";

      for (let index = 0; index < inputTextArray.length; index++) {
        let newSpan = document.createElement("span");

        newSpan.innerText = inputTextArray[index];
        newSpan.style.marginRight = "4px";

        //type check
        switch (inputTextArray[index][0]) {
          case "@":
            newSpan.style.color = "#1BAF7D";
            break;
          case "#":
            newSpan.style.color = "#996BED";
            break;
          default:
            break;
        }
        const expresionRegularUrl =
          /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
        const expresionRegularGmail =
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (expresionRegularUrl.test(inputTextArray[index])) {
          newSpan.style.color = "#1588FF";
        } else if (expresionRegularGmail.test(inputTextArray[index])) {
          newSpan.style.color = "#F7A43A";
        }

        document.getElementById("text-color-span")?.appendChild(newSpan);
      }
      const inputTextElement = document.getElementById("input-text");
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
          id="input-text"
        />

        <p
          className="absolute h-6 w-full flex items-center pointer-events-none ml-[29.0px] font-serif"
          id="text-color-span"
        ></p>
      </div>

      {menuDisplay && <TaskMenu />}
    </div>
  );
};

export default BasicTaskList;
