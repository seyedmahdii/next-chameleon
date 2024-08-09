import React, { ComponentPropsWithoutRef } from "react";

function NavbarDropdownItem(props: ComponentPropsWithoutRef<"button">) {
	return (
		<button
			{...props}
			type="button"
			className={`hover:bg-[--navbar-dropdown_menu_item-background-hover-color] flex justify-center items-center p-2 text-sm font-medium leading-[1.2]  ${props.className}`}
		>
			{props.children}
		</button>
	);
}

export default NavbarDropdownItem;
