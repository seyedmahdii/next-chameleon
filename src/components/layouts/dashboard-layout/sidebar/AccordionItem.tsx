import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionItem = React.forwardRef(function AccordionItemComponent(
	{
		children,
		className,
		value,
		showTitle,
		...props
	}: {
		className?: string;
		children?: ReactNode;
		value: string;
		showTitle?: boolean;
		props?: any;
	},
	forwardedRef: any
) {
	return (
		<Accordion.Item
			className={`
          focus-within:shadow-black overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_1px]
          ${className}
        `}
			value={value}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Item>
	);
});

export default AccordionItem;
