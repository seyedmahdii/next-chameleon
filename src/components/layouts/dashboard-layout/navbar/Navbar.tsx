import React, { memo, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Icon from "@mdi/react";
import {
	mdiAccountCircle,
	mdiBellOutline,
	mdiTranslate,
	mdiConsoleLine,
	mdiMagnify,
	mdiMenu,
	mdiThemeLightDark,
	mdiWhiteBalanceSunny,
	mdiMoonWaningCrescent,
	mdiLock,
	mdiLogout,
} from "@mdi/js";
import { changeLanguage } from "../../../../utils/changeLanguage";
import useHandleResizeTransition from "../../../../hooks/useHandleResizeTransition";
import { FormattedMessage } from "react-intl";
import { changeTheme } from "../../../../utils/changeTheme";
import NavbarDropdownTriggerButton from "./NavbarDropdownTriggerButton";
import NavbarItem from "./NavbarItem";
import NavbarDropdownContent from "./NavbarDropdownContent";
import NavbarDropdownItem from "./NavbarDropdownItem";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";
import {
	setIsSidebarHoverDisabled,
	setIsSidebarOpen,
} from "../../../../redux/UIConfig/UIConfigSlice";

const Navbar = () => {
	const headerRef = useRef<HTMLUListElement>(null);
	const isSidebarOpen = useAppSelector((state) => state.uiConfig.isSidebarOpen);
	const dispatch = useAppDispatch();

	useHandleResizeTransition(headerRef.current, [isSidebarOpen]);

	const menuClickHandler = () => {
		if (isSidebarOpen) {
			dispatch(setIsSidebarHoverDisabled(false));
		} else {
			dispatch(setIsSidebarHoverDisabled(true));
		}

		dispatch(setIsSidebarOpen(!isSidebarOpen));
	};

	return (
		<NavigationMenu.Root
			className={`w-full fixed end-0 top-[0] z-[10] ease-in ${
				isSidebarOpen ? "md:w-[calc(100%-16.0rem)]" : "md:w-[calc(100%-3.0rem)]"
			}`}
			ref={headerRef}
		>
			<NavigationMenu.List
				className={`bg-[--navbar-background-color] text-[--navbar-item-text-color]
          flex flex-row items-stretch justify-between h-[2.6rem] left-[100%]
          `}
			>
				<div id="navbar-start-container" className="flex space-x-2">
					<NavbarItem onClick={menuClickHandler}>
						<Icon path={mdiMenu} size={0.8} />
					</NavbarItem>

					<NavbarItem onClick={() => alert("open console")}>
						<Icon path={mdiMagnify} size={0.8} />
					</NavbarItem>
				</div>

				<div id="navbar-end-container" className="flex space-x-2">
					<NavigationMenu.Item className="flex">
						<NavbarDropdownTriggerButton>
							<Icon path={mdiTranslate} size={0.8} />{" "}
						</NavbarDropdownTriggerButton>
						<NavbarDropdownContent>
							<NavbarDropdownItem onClick={() => changeLanguage("ltr")}>English</NavbarDropdownItem>
							<NavbarDropdownItem onClick={() => changeLanguage("rtl")}>فارسی</NavbarDropdownItem>
						</NavbarDropdownContent>
					</NavigationMenu.Item>

					<NavigationMenu.Item className="flex">
						<NavbarDropdownTriggerButton>
							<Icon path={mdiThemeLightDark} size={0.8} />{" "}
						</NavbarDropdownTriggerButton>
						<NavbarDropdownContent>
							<NavbarDropdownItem onClick={() => changeTheme("light")}>
								<div className="flex items-center justify-center">
									<Icon path={mdiWhiteBalanceSunny} size={0.8} className="me-2" />
									<FormattedMessage defaultMessage={"Light"} id="header.light-theme" />
								</div>
							</NavbarDropdownItem>
							<NavbarDropdownItem onClick={() => changeTheme("dark")}>
								<div className="flex items-center justify-center">
									<Icon path={mdiMoonWaningCrescent} size={0.8} className="me-2" />
									<FormattedMessage defaultMessage={"Dark"} id="header.dark-theme" />
								</div>
							</NavbarDropdownItem>
							<NavbarDropdownItem onClick={() => changeTheme("blue")}>
								<div className="flex items-center justify-center">Blue</div>
							</NavbarDropdownItem>
							<NavbarDropdownItem onClick={() => changeTheme("barbie")}>
								<div className="flex items-center justify-center">Barbie</div>
							</NavbarDropdownItem>
						</NavbarDropdownContent>
					</NavigationMenu.Item>
				</div>
				<NavigationMenu.Indicator className="data-[state=visible]:animate-[--fadeIn] data-[state=hidden]:animate-[--fadeOut] top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
					<div
						className="relative top-[70%] 
              h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] 
              bg-[--navbar-dropdown_menu-border-color]
							bgd-[redddd]
            "
					/>
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute top-full start-0 flex w-full justify-end">
				<NavigationMenu.Viewport
					className="bg-[--navbar-dropdown_menu-background-color] border border-[--navbar-dropdown_menu-border-color]
						data-[state=open]:animate-[--scaleIn] 
            data-[state=closed]:animate-[--scaleOut] relative mt-[10px] 
            h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] 
            overflow-hidden rounded-[4px] transition-[width,_height]
            duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] end-2
          "
				/>
			</div>
		</NavigationMenu.Root>
	);
};

export default memo(Navbar);
