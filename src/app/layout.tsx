"use client";

import "./globals.css";
import localFont from "next/font/local";
import { JSXElementConstructor, ReactElement } from "react";
import ClientApp from "@/components/ClientApp";
import store from "@/redux/configureStore";
import { Provider } from "react-redux";

const iranYekan = localFont({
	src: [
		{
			path: "./fonts/IRANYekanWebLight.woff",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/IRANYekanWebRegular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/IRANYekanWebBold.woff",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/IRANYekanWebExtraBold.woff",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--font-iran-yekan",
});

export default function RootLayout({
	children,
}: {
	children:
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactElement<any, string | JSXElementConstructor<any>>[];
}) {
	return (
		<html lang="fa">
			<head></head>
			<body className={`bg-[--body-background-color] ${iranYekan.className}`} dir="rtl">
				<Provider store={store}>
					<ClientApp>{children}</ClientApp>
				</Provider>
			</body>
		</html>
	);
}
