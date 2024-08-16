import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	ComputedCssGlobalColors,
	CssTailwindGlobalHexColors,
	getComputedCssGlobalColors,
} from "../../utils/cssGlobalVariables";

export type Themes = "light" | "dark";

export const themes: Record<Themes, Partial<ComputedCssGlobalColors> & CssTailwindGlobalHexColors> =
	{
		light: {
			"primary-color": "#4A6CF7",
			"secondary-color": "#b1c1ff",
		},
		dark: {
			"primary-color": "#FF0000",
			"secondary-color": "#323232",
		},
	};

interface UIConfigState {
	dir: "ltr" | "rtl";
	lang: string;
	theme: Themes;
	themeComputedVariables: CssTailwindGlobalHexColors & ComputedCssGlobalColors;
	isSidebarOpen: boolean;
	isSidebarHoverDisabled: boolean;
}

const initialTheme = "light";

const computedGlobalVariables = getComputedCssGlobalColors(themes[initialTheme]);
const initialState: UIConfigState = {
	dir: "ltr",
	lang: "en",
	theme: initialTheme,
	themeComputedVariables: {
		"primary-color": themes[initialTheme]["primary-color"],
		"secondary-color": themes[initialTheme]["secondary-color"],
		...computedGlobalVariables,
	},
	isSidebarOpen: true,
	isSidebarHoverDisabled: true,
};

export const uiConfigSlice = createSlice({
	name: "uiConfig",
	initialState,
	reducers: {
		setDir: (state, action: PayloadAction<"rtl" | "ltr">) => {
			state.dir = action.payload;
		},
		setLang: (state, action: PayloadAction<string>) => {
			state.lang = action.payload;
		},
		setTheme: (
			state,
			action: PayloadAction<{
				theme: Themes;
				themeComputedVariables: CssTailwindGlobalHexColors & ComputedCssGlobalColors;
			}>
		) => {
			state.theme = action.payload.theme;
			state.themeComputedVariables = action.payload.themeComputedVariables;
		},
		setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSidebarOpen = action.payload;
		},
		setIsSidebarHoverDisabled: (state, action: PayloadAction<boolean>) => {
			state.isSidebarHoverDisabled = action.payload;
		},
	},
});

export const { setDir, setLang, setTheme, setIsSidebarOpen, setIsSidebarHoverDisabled } =
	uiConfigSlice.actions;

export default uiConfigSlice.reducer;
