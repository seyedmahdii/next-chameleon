import { changeTheme } from "@/utils/changeTheme";

const menuData = [
	{
		id: 1,
		title: "خانه",
		path: "/",
		newTab: false,
	},
	{
		id: 2,
		title: "رنگ ها",
		newTab: false,
		submenu: [
			{
				id: 21,
				title: "روشن",
				onClick: () => changeTheme("light"),
			},
			{
				id: 22,
				title: "تیره",
				onClick: () => changeTheme("dark"),
			},
			{
				id: 23,
				title: "طلایی",
				onClick: () => changeTheme("gold"),
			},
			{
				id: 24,
				title: "آلبالویی",
				onClick: () => changeTheme("cherryRed"),
			},
		],
	},
];
export default menuData;
