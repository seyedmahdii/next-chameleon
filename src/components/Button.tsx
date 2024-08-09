import React from "react";
import { CssButtonGlobalHexColors, getComputedCssButtonColors } from "../utils/cssGlobalVariables";
import { useAppSelector } from "@/hooks/useRedux";

interface ButtonProps
	extends Omit<
		React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		"color"
	> {
	variant?: "contained" | "outlined" | "text";
	color?:
		| "danger"
		| "warning"
		| "success"
		| string
		| (Required<Pick<CssButtonGlobalHexColors, "button-background-color">> &
				Partial<CssButtonGlobalHexColors>);
}

const Button = ({ className, color, variant = "contained", ...props }: ButtonProps) => {
	const { themeComputedVariables } = useAppSelector((state) => state.uiConfig); //dark | light | blue

	const primary = themeComputedVariables["primary-color"]; //defalut

	const colors =
		color === "danger"
			? getComputedCssButtonColors(
					{
						"button-background-color": themeComputedVariables["danger-color"],
					},
					variant
			  )
			: color === "success"
			? getComputedCssButtonColors(
					{
						"button-background-color": themeComputedVariables["success-color"],
					},
					variant
			  )
			: color === "warning"
			? getComputedCssButtonColors(
					{
						"button-background-color": themeComputedVariables["warning-color"],
					},
					variant
			  )
			: color === "info"
			? getComputedCssButtonColors(
					{
						"button-background-color": themeComputedVariables["info-color"],
					},
					variant
			  )
			: typeof color === "object"
			? getComputedCssButtonColors(color, variant)
			: typeof color === "string" && color !== ""
			? getComputedCssButtonColors({ "button-background-color": color }, variant)
			: getComputedCssButtonColors({ "button-background-color": primary }, variant);

	// throw Error("color wrong")

	return (
		<button
			className={`${
				variant === "contained" &&
				`!bg-[${colors["button-background-color"]}] text-[${colors["button-text-color"]}] !hover:bg-[${colors["button-background-hover-color"]}] hover:text-[${colors["button-text-hover-color"]}]
							!disabled:bg-[${colors["switch-button-background-disabled-color"]}] disabled:text-[${colors["button-text-disabled-color"]}] disabled:cursor-not-allowed`
			}
					${
						variant === "outlined" &&
						`border border-[${colors["button-background-color"]}] text-[${colors["button-background-color"]}] hover:bg-[${colors["button-background-hover-color"]}] hover:text-[${colors["button-text-hover-color"]}] disabled:bg-transparent disabled:text-[${colors["button-text-disabled-color"]}] disabled:border-[${colors["button-border-disabled-color"]}]`
					}
					${
						variant === "text" &&
						`text-[${colors["button-background-color"]}] hover:bg-[${colors["button-background-color"]}] hover:text-[${colors["button-text-hover-color"]}] disabled:bg-transparent disabled:text-[${colors["button-text-disabled-color"]}]`
					}
					${className}
				}`}
			{...props}
		/>
	);
};

export default Button;
