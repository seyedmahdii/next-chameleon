import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionContent = React.forwardRef(function AccordionContentComponent(
	{
		children,
		className,
		...props
	}: {
		className?: string;
		children?: ReactNode;
		props?: any;
	},
	forwardedRef: any
) {
	return (
		<Accordion.Content
			className={`data-[state=open]:animate-[--slideDown] data-[state=open]:bg-[--sidebar-content-background-active-color] data-[state=closed]:animate-[--slideUp] overflow-hidden text-[15px] ${className}`}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Content>
	);
});

export default AccordionContent;
