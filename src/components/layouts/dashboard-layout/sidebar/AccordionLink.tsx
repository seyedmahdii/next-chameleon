import { mdiDotsVertical, mdiDragVertical } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import React, { ReactNode } from "react";

const AccordionLink = ({
	href,
	className,
	children,
}: {
	href: string;
	className?: string;
	children?: ReactNode;
}) => {
	return (
		<Link
			href={href}
			className={`text-[--sidebar-item-text-color] hover:bg-[--sidebar-item-background-hover-color] py-1 duration-200 flex justify-between group ${className}`}
		>
			<div className="flex">
				<Icon path={mdiDragVertical} size={0.9} className="invisible group-hover:visible" />
				{children}
			</div>
			<Icon path={mdiDotsVertical} size={0.9} className="invisible group-hover:visible" />
		</Link>
	);
};

export default AccordionLink;
