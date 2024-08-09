import React, { memo, useEffect, useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Icon from "@mdi/react";
import { mdiTriangleSmallDown, mdiWallFire, mdiCog } from "@mdi/js";
import SidebarData from "../../../../data/SidebarData";
import useHandleResizeTransition from "../../../../hooks/useHandleResizeTransition";
import { useIntl } from "react-intl";
import AccordionLink from "./AccordionLink";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTrigger from "./AccordionTrigger";
import AccordionRoot from "./AccordionRoot";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";
import { setIsSidebarOpen } from "../../../../redux/UIConfig/UIConfigSlice";

function Sidebar() {
	const [value, setValue] = useState<string>("");
	const [subValue, setSubValue] = useState<string>("");
	const sidebarRef = useRef<HTMLElement>(null);
	const intl = useIntl();
	const { isSidebarOpen, isSidebarHoverDisabled } = useAppSelector((state) => state.uiConfig);
	const dispatch = useAppDispatch();

	useHandleResizeTransition(sidebarRef.current, [isSidebarOpen]);

	const handleSidebarMouseOver = () => {
		if (!isSidebarHoverDisabled) {
			dispatch(setIsSidebarOpen(true));
		}
	};

	const handleSidebarMouseLeave = () => {
		if (!isSidebarHoverDisabled) {
			dispatch(setIsSidebarOpen(false));
		}
	};

	useEffect(() => {
		if (!isSidebarOpen) {
			setValue("");
			setSubValue("");
		}
	}, [isSidebarOpen]);

	return (
		<aside
			className={`bg-[--sidebar-background-color] fixed top-[2.6rem] md:top-[0] md:start-[0] ${
				// For <md screens
				isSidebarOpen ? "-start-[0]" : "-start-64"
				// isSidebarOpen ? "left-[--sideabr-offset]" : "-left-64"
			} ${isSidebarOpen ? "w-64" : "w-12"} h-screen ease-in z-[2] overflow-hidden border-r `}
			onPointerMove={handleSidebarMouseOver}
			onPointerLeave={handleSidebarMouseLeave}
			ref={sidebarRef}
		>
			<button
				type="button"
				className={`bg-[rgb(var(--sidebar-header-background))] hover:bg-[--sidebar-header-background-hover-color] 
          text-[--sidebar-header-text-color] w-full flex items-center justify-between h-[2.6rem] pr-3 pl-1 
        text- duration-200`}
			>
				<span className="flex items-center">
					<Icon
						path={mdiWallFire}
						size={1}
						className={`mr-1 duration-300 ${!isSidebarOpen && "ml-2"}`}
					/>
					<span
						className={`whitespace-nowrap overflow-hidden text-clip duration-200 ${
							!isSidebarOpen ? "opacity-0 -ms-[2rem]" : "opacity-100 ms-0"
						}`}
					>
						Test Header
					</span>
				</span>
				<Icon path={mdiTriangleSmallDown} size={0.8} className={`${!isSidebarOpen && "hidden"}`} />
			</button>

			<AccordionRoot value={value} onValueChange={setValue}>
				{SidebarData(intl).map((item, i) => (
					<AccordionItem key={i} value={`item-${item.title}`} showTitle={isSidebarOpen}>
						<AccordionTrigger icon={item.icon} isRoot showTitle={isSidebarOpen}>
							{item.title}
						</AccordionTrigger>

						<AccordionContent>
							<div className="pl-3">
								{item.hasSubmenu &&
									item.subMenuData.map((subMenu) => (
										<AccordionRoot key={subMenu.title} value={subValue} onValueChange={setSubValue}>
											{subMenu.hasSubmenu ? (
												<AccordionItem value={`subitem-${subMenu.title}`} showTitle={isSidebarOpen}>
													<Accordion.Header>
														<AccordionTrigger icon={mdiCog} showTitle={isSidebarOpen}>
															{subMenu.title}
														</AccordionTrigger>
													</Accordion.Header>
													{subMenu.subMenuData?.map((submenu2: any) => (
														<AccordionContent key={submenu2.title}>
															<div className="pl-3">
																<AccordionLink href={submenu2.href}>{submenu2.title}</AccordionLink>
															</div>
														</AccordionContent>
													))}
												</AccordionItem>
											) : (
												<AccordionLink href={subMenu.href}>{subMenu.title}</AccordionLink>
											)}
										</AccordionRoot>
									))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</AccordionRoot>
		</aside>
	);
}

export default memo(Sidebar);
