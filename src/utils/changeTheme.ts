import store from "../redux/configureStore";
import { uiConfigSlice, Themes, themes } from "../redux/UIConfig/UIConfigSlice";
import { getComputedCssGlobalColors, mapPropetiesToCss } from "./cssGlobalVariables";

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
		mapPropetiesToCss(
			{
				"primary-color": themes[theme]["primary-color"],
				"secondary-color": themes[theme]["secondary-color"],
			},
			computedGlobalVariables
		) +
		`\n}`;
};
