import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Direction } from "@radix-ui/react-direction";
import {
	ComputedCssGlobalColors,
	CssTailwindGlobalHexColors,
	getComputedCssGlobalColors,
} from "../../utils/cssGlobalVariables";

export type Themes = "light" | "dark" | "blue" | "barbie";

export const themes: Record<Themes, Partial<ComputedCssGlobalColors> & CssTailwindGlobalHexColors> =
	{
		light: {
			"primary-color": "#499258",
			"secondary-color": "#ffffff",
			"navbar-dropdown_menu-background-color": "#ffffff",
			"navbar-dropdown_menu_item-background-hover-color": "#e6e6e6",
			"navbar-dropdown_menu_item-text-color": "#000000",
			"navbar-dropdown_menu-border-color": "#000000",
			"widget-warning-background-color": "#ffffee",
			"widget-danger-background-color": "#f5eced",
			"widget-success-background-color": "#f2ffff",
			"widget-info-background-color": "#f2faff",
			"table-row_group_icon-color": "#646464",
			"table-row_group_icon-background-color": "#ffffff",
			"input_group-addon-color": "#495057",
			"input_group-addon-background-color": "#e9ecef",
			"titlebar-background-color": "#e6e6e6",
			"titlebar-text-color": "#262626",
			"contentbox-background-color": "#ffffff",
			"sectiontitle-background-color": "#f6f6f6",
			"sectiontitle-text-color": "#262626",
		},
		dark: {
			"primary-color": "#1f1f1f",
			"secondary-color": "#323232",
			"sidebar-header-text-color": "#f1f1f1",
			"sidebar-item-background-hover-color": "#454545",
			"sidebar-item-background-active-color": "#484848",
			"sidebar-trigger_text-active-color": "#f7f7f7",
			"sidebar-trigger_icon-active-color": "#f7f7f7",
			"input-border-focus-color": "#ffffff",
			"radio-background-checked-color": "#ffffff",
			"checkbox-background-checked-color": "#ffffff",
			"select-control-border-focus-color": "#ffffff",
			"toggleGroup-background-color": "#343434",
		},
		blue: {
			"primary-color": "#2b76b9",
			"secondary-color": "#ffffff",
			"navbar-dropdown_menu-background-color": "#ffffff",
			"navbar-dropdown_menu_item-background-hover-color": "#e6e6e6",
			"navbar-dropdown_menu_item-text-color": "#000000",
			"navbar-dropdown_menu-border-color": "#000000",
			"widget-warning-background-color": "#ffffee",
			"widget-danger-background-color": "#f5eced",
			"widget-success-background-color": "#f2ffff",
			"widget-info-background-color": "#f2faff",
			"table-row_group_icon-color": "#646464",
			"table-row_group_icon-background-color": "#ffffff",
			"input_group-addon-color": "#495057",
			"input_group-addon-background-color": "#e9ecef",
			"titlebar-background-color": "#e6e6e6",
			"titlebar-text-color": "#262626",
			"contentbox-background-color": "#ffffff",
			"sectiontitle-background-color": "#f6f6f6",
			"sectiontitle-text-color": "#262626",
		},
		barbie: {
			"primary-color": "#ff99cc",
			"secondary-color": "#ffffff",
			"toggleGroup-background-color": "#fff",
		},
	};

interface UIConfigState {
	dir: Direction;
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
		setDir: (state, action: PayloadAction<Direction>) => {
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
