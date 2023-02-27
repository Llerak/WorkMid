const urlPattern =
	/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
const RegularGmailPattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const insertText = (TextArray: string[], span: HTMLElement) => {
	TextArray.map((item) => {
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

		span.appendChild(newElement);
	});
};
