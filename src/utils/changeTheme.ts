import store from "../redux/configureStore";
import { uiConfigSlice, Themes, themes } from "../redux/UIConfig/UIConfigSlice";
import { getComputedCssGlobalColors, mapPropertiesToCss } from "./cssGlobalVariables";

export const changeTheme = (theme: Themes) => {
	const computedGlobalVariables = getComputedCssGlobalColors(themes[theme]);
	store.dispatch(
		uiConfigSlice.actions.setTheme({
			theme: theme,
			themeComputedVariables: {
				"primary-color": themes[theme]["primary-color"],
				"secondary-color": themes[theme]["secondary-color"],
				...computedGlobalVariables,
			},
		})
	);

	let styleElement = document.getElementById("global-variables");
	styleElement!.innerHTML =
		`:root { \n` +
		mapPropertiesToCss(
			{
				"primary-color": themes[theme]["primary-color"],
				"secondary-color": themes[theme]["secondary-color"],
			},
			computedGlobalVariables
		) +
		`\n}`;
};

export const changeLiveTheme = (primaryColor: string, secondaryColor: string) => {
	const computedGlobalVariables = getComputedCssGlobalColors({
		"primary-color": primaryColor,
		"secondary-color": secondaryColor,
	});
	store.dispatch(
		uiConfigSlice.actions.setTheme({
			theme: "cherryRed",
			themeComputedVariables: {
				"primary-color": primaryColor,
				"secondary-color": secondaryColor,
				...computedGlobalVariables,
			},
		})
	);

	let styleElement = document.getElementById("global-variables");
	styleElement!.innerHTML =
		`:root { \n` +
		mapPropertiesToCss(
			{
				"primary-color": primaryColor,
				"secondary-color": secondaryColor,
			},
			computedGlobalVariables
		) +
		`\n}`;
};
