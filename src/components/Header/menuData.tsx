import { changeTheme } from "@/utils/changeTheme";

const menuData = [
	{
		id: 1,
		title: "Home",
		path: "/",
		newTab: false,
	},
	{
		id: 2,
		title: "themes",
		newTab: false,
		submenu: [
			{
				id: 21,
				title: "Light",
				onClick: () => changeTheme("light"),
			},
			{
				id: 22,
				title: "Dark",
				onClick: () => changeTheme("dark"),
			},
		],
	},
];
export default menuData;
