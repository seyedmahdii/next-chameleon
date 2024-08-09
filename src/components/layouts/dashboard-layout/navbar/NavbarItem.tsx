import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationMenuItemProps } from "@radix-ui/react-navigation-menu";

function NavbarItem(props: NavigationMenuItemProps) {
	return (
		<NavigationMenu.Item
			{...props}
			className={`hover:bg-[--navbar-item-background-hover-color] flex items-center select-none px-2 cursor-pointer ${props.className}`}
		>
			{props.children}
		</NavigationMenu.Item>
	);
}

export default NavbarItem;
