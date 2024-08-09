import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationMenuContentProps } from "@radix-ui/react-navigation-menu";

function NavbarDropdownContent(props: NavigationMenuContentProps) {
	return (
		<NavigationMenu.Content className="data-[motion=from-start]:animate-[--enterFromLeft] data-[motion=from-end]:animate-[--enterFromRight] data-[motion=to-start]:animate-[--exitToLeft] data-[motion=to-end]:animate-[--exitToRight] absolute top-0 left-0 w-full sm:w-auto">
			<div className="sm:w-[250px] flex flex-col text-[--navbar-dropdown_menu_item-text-color]">
				{props.children}
			</div>
		</NavigationMenu.Content>
	);
}

export default NavbarDropdownContent;
