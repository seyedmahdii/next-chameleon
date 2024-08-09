import React, { ReactNode } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Icon from "@mdi/react";
import { mdiTriangleDown } from "@mdi/js";

interface NavbarDropdownTriggerButtonProps {
	children: ReactNode;
	className?: string;
}

function NavbarDropdownTriggerButton(props: NavbarDropdownTriggerButtonProps) {
	const disableHoverEffect = (event: any) => event.preventDefault();

	return (
		<NavigationMenu.Trigger
			className={`hover:bg-[--navbar-item-background-hover-color] focus:bg-[--navbar-item-background-hover-color] focus:shadow-[--navbar-item-border-focus-color] flex items-center select-none gap-[4px] px-2 focus:shadow-[0_0_0_1px] cursor-pointer ${props.className}`}
			onPointerMove={disableHoverEffect}
			onPointerLeave={disableHoverEffect}
		>
			{props.children}
			<Icon
				path={mdiTriangleDown}
				size={0.3}
				className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
				aria-hidden
			/>
		</NavigationMenu.Trigger>
	);
}

export default NavbarDropdownTriggerButton;
