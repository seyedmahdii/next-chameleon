import { mdiDesktopClassic, mdiNetworkPos, mdiCogOutline } from "@mdi/js";
import { IntlShape } from "react-intl";

export interface SidebarType {
	title: string;
	icon: string;
	hasSubmenu: boolean;
	subMenuData: any[];
}

function SidebarData(inlt: IntlShape): SidebarType[] {
	return [
		{
			title: inlt.formatMessage({ id: "Part 1", defaultMessage: "Sidebar Item" }),
			icon: mdiDesktopClassic,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({
						id: "item 1",
						defaultMessage: "Sidebar Item",
					}),
					href: "/item1",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.MyTest", defaultMessage: "Button" }),
					href: "/mytest",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({
						id: "item 2",
						defaultMessage: "Sidebar Item",
					}),
					href: "/item2",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
		{
			title: inlt.formatMessage({ id: "Part 2", defaultMessage: "Sidebar Item" }),
			icon: mdiNetworkPos,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({
						id: "item 1",
						defaultMessage: "Sidebar Item",
					}),
					href: "/item1",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
	];
}

export default SidebarData;
