"use client";

import { ReactNode, useInsertionEffect } from "react";
import {
	CssTailwindGlobalHexColors,
	getComputedCssGlobalColors,
	mapPropetiesToCss,
} from "../utils/cssGlobalVariables";
import { themes } from "../redux/UIConfig/UIConfigSlice";

export default function ClientApp(props: { children: ReactNode }) {
	useInsertionEffect(() => {
		let styleElement = document.getElementById("global-variables");
		if (styleElement) return;

		const tailwindColors: CssTailwindGlobalHexColors = themes.light;

		styleElement = document.createElement("style");
		styleElement.id = "global-variables";
		styleElement.innerHTML =
			`:root { \n` +
			mapPropetiesToCss(tailwindColors, getComputedCssGlobalColors(tailwindColors)) +
			`\n}`;
		document.head.appendChild(styleElement);
	});

	return <>{props.children}</>;
}
