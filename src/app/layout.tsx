"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { JSXElementConstructor, ReactElement } from "react";
import ClientApp from "@/components/ClientApp";
import store from "@/redux/configureStore";
import { Provider } from "react-redux";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={`bg-[--body-background-color] ${inter.className}`} dir="rtl">
				<Script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></Script>
				<Provider store={store}>
					<ClientApp>{children}</ClientApp>
				</Provider>
			</body>
		</html>
	);
}
