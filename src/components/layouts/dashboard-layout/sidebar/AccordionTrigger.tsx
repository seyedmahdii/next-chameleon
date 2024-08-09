import React, { ReactNode, Ref } from "react";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionTrigger = React.forwardRef(function AccordionTriggerComponent(
	{
		children,
		className,
		icon,
		isRoot = false,
		showTitle,
		...props
	}: {
		className?: string;
		children?: ReactNode;
		icon?: string;
		isRoot?: boolean;
		showTitle: boolean;
		props?: any;
	},
	forwardedRef: Ref<HTMLButtonElement>
) {
	return (
		<Accordion.Header className="flex w-full">
			<Accordion.Trigger
				className={`bg-[--sidebar-trigger-background-color] hover:bg-[--sidebar-trigger-background-hover-color] duration-200 group flex flex-1 w-full cursor-pointer items-center justify-between pl-2 pr-1 text-[15px] leading-none
            ${className} ${!showTitle ? "py-2" : "py-[0.2rem]"}
          overflow-hidden whitespace-nowrap	text-clip
          ${isRoot && "data-[state=open]:bg-[--sidebar-trigger-background-active-color]"}
          ${!isRoot && "data-[state=open]:bg-[--sidebar-item-background-active-color]"}
          `}
				{...props}
				ref={forwardedRef}
				disabled={!showTitle}
			>
				<div className="flex items-center">
					{icon && (
						<Icon
							path={icon}
							className={`
              ${isRoot && "group-data-[state=open]:text-[--sidebar-trigger_icon-active-color]"}
              ${!isRoot && "group-data-[state=open]:text-[--sidebar-trigger_icon-color]"}
              text-[--sidebar-trigger_icon-color]
              me-2 duration-200 ${!showTitle && "ms-[0.3rem]"}`}
							aria-hidden
							size={showTitle ? 0.8 : 0.9}
						/>
					)}
					<span
						className={`
            ${isRoot && "group-data-[state=open]:text-[--sidebar-trigger_text-active-color]"}
            ${!isRoot && "group-data-[state=open]:text-[--sidebar-trigger_text-color]"}
            text-[--sidebar-trigger_text-color]
            duration-200 ${!showTitle ? "opacity-0 -ms-[2rem]" : "opacity-100 ms-0 font-medium"}`}
					>
						{children}
					</span>
				</div>
				<Icon
					path={mdiChevronRight}
					className={`text-[--sidebar-trigger_icon-color] ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
            transition-transform duration-300
            group-data-[state=open]:rotate-90 ${!showTitle && "hidden"}
          `}
					aria-hidden
					size={1}
				/>
			</Accordion.Trigger>
		</Accordion.Header>
	);
});

export default AccordionTrigger;
