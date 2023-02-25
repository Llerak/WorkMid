import {  MouseEventHandler, ReactNode, RefObject } from "react";

type ButtonTaskListProps = {
	children?: ReactNode;
	className?: string;
	onClick?: MouseEventHandler;
	Ref?: RefObject<HTMLDivElement>;
};

const ButtonTaskList = ({
	children,
	className,
	onClick,
	Ref,
}: ButtonTaskListProps) => {
	const style: string =
		"cursor-pointer flex items-center py-0.5 px-4 border rounded-md m-0.5 h-8 text-sm font-mono bg-[#EAF0F5]";

	console.log();

	return (
		<div
			className={style + " " + className}
			onClick={onClick}
			ref={Ref}
		>
			{children}
		</div>
	);
};

export default ButtonTaskList;
