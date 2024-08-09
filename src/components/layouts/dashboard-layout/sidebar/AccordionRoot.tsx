import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionRoot = React.forwardRef(function AccordionRootComponent(
	{
		children,
		className,
		value,
		onValueChange,
		...props
	}: {
		className?: string;
		children?: ReactNode;
		value?: string;
		onValueChange?: any;
		props?: any;
	},
	forwardedRef: any
) {
	return (
		<Accordion.Root
			className={`w-full ${className}`}
			type="single"
			collapsible
			value={value}
			onValueChange={onValueChange}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Root>
	);
});

export default AccordionRoot;
