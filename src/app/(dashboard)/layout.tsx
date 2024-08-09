"use client";

import React, { ReactElement, useRef } from "react";
import Navbar from "@/components/layouts/dashboard-layout/navbar/Navbar";
import Sidebar from "@/components/layouts/dashboard-layout/sidebar/Sidebar";
import useHandleResizeTransition from "@/hooks/useHandleResizeTransition";
import { useAppSelector } from "@/hooks/useRedux";

export default function DashboardLayout(props: { children: ReactElement | ReactElement[] }) {
	const { isSidebarOpen, isSidebarHoverDisabled } = useAppSelector((state) => state.uiConfig);
	const contentRef = useRef<HTMLDivElement>(null);

	useHandleResizeTransition(contentRef.current, [isSidebarOpen]);

	return (
		<>
			<Navbar />
			<Sidebar />
			<div className={`flex justify-end w-full`}>
				<div
					className={`w-full mt-[2.6rem] ease-in ${
						isSidebarOpen && isSidebarHoverDisabled
							? `md:w-[calc(100%-16.0rem)]`
							: `md:w-[calc(100%-3.0rem)]`
					}`}
					ref={contentRef}
				>
					{props.children}
				</div>
			</div>
		</>
	);
}
