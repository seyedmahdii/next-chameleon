"use client";

import { ReactNode, useEffect, useInsertionEffect, useState } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import { useAppSelector } from "../hooks/useRedux";
import { IntlProvider } from "react-intl";
import {
	CssTailwindGlobalHexColors,
	getComputedCssGlobalColors,
	mapPropetiesToCss,
} from "../utils/cssGlobalVariables";
import { themes } from "../redux/UIConfig/UIConfigSlice";

export default function ClientApp(props: { children: ReactNode }) {
	const { dir, lang } = useAppSelector((state) => state.uiConfig);
	const [messages, setMessages] = useState({});

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

	// useEffect(() => {
	// 	import(`@/lang/${lang}.json`).then((messages) => {
	// 		setMessages(messages);
	// 	});

	// 	// Direction of widgets
	// 	const gridLayoutContainer = document.querySelector(".react-grid-layout");
	// 	const children = document.querySelectorAll(".react-grid-item");
	// 	gridLayoutContainer?.setAttribute("dir", "ltr");
	// 	children.forEach((child) => child.setAttribute("dir", dir));
	// }, [lang, dir]);

	return (
		<DirectionProvider dir={dir}>
			<IntlProvider locale={lang} defaultLocale="en" key={lang} messages={messages}>
				{props.children}
			</IntlProvider>
		</DirectionProvider>
	);
}
