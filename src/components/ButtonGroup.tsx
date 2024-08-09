import { ReactNode } from "react";

interface ButtonProps {
	className: string;
	orientation?: "vertical" | "horizontal";
	children: ReactNode;
}

export default function ButtonGroup(props: ButtonProps) {
	const { className, orientation = "horizontal", children } = props;
	console.log("children is : ", children);

	return (
		<div
			className={`
		${orientation === "horizontal" && `flex-row`} 
		${orientation === "vertical" && `flex-col`} 
		w-fit flex rounded [&>*:first-child]:rounded-s [&>*:last-child]:rounded-e [&>*:not(:last-child)]:border-e [&>*:not(:first-child)]:border-s border-[--button-border-active-color] ${className}`}
		>
			{children}
		</div>
	);
}
