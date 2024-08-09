// [component]-[slot(s)]-modifier-[property]-[pseudo(s)]-unit
// modifiers: primary, secondary, warning, success, info, danger
// pseudos (https://mui.com/material-ui/customization/how-to-customize): active, checked, completed, disabled, error, expanded, focusVisible, focused, readOnly, required, selected

import TypedMergeable from "./TypedMergeable";

export type CssTailwindGlobalHexColors = {
	"primary-color": string;
	"secondary-color": string;
};

export type CssBodyGlobalHexColors = {
	"body-background-color": string;
};

export type CssNavbarGlobalHexColors = {
	"navbar-background-color": string;
	"navbar-item-text-color": string;
	"navbar-item-background-hover-color": string;
	"navbar-item-border-focus-color": string;
	"navbar-dropdown_menu-background-color": string;
	"navbar-dropdown_menu-border-color": string;
	"navbar-dropdown_menu_item-text-color": string;
	"navbar-dropdown_menu_item-background-hover-color": string;
};

export type CssSidebarGlobalHexColors = {
	"sidebar-background-color": string;
	"sidebar-header-text-color": string;
	"sidebar-header-background-color": string;
	"sidebar-header-background-hover-color": string;
	"sidebar-trigger-background-color": string;
	"sidebar-trigger_text-color": string;
	"sidebar-trigger_icon-color": string;
	"sidebar-trigger-background-active-color": string;
	"sidebar-trigger_text-active-color": string;
	"sidebar-trigger_icon-active-color": string;
	"sidebar-item-text-color": string;
	"sidebar-item-background-active-color": string;
	"sidebar-item-background-hover-color": string;
	"sidebar-content-background-active-color": string;
};

export type CssWidgetGlobalHexColors = {
	"widget-background-color": string;
	"widget-border-color": string;
	"widget-heading-background-color": string;
	"widget-heading-color": string;
	"widget-content-color": string;
	"widget-dropdown_menu_button-color": string;
	"widget-dropdown_menu-background-color": string;
	"widget-dropdown_menu-text-color": string;
	"widget-dropdown_menu-background-hover-color": string;
	"widget-dropdown_menu-text-hover-color": string;
	"widget-dropdown_menu-background-active-color": string;
	"widget-dropdown_menu-text-active-color": string;

	"widget-warning-background-color": string;
	"widget-warning-border-color": string;
	"widget-heading-warning-background-color": string;
	"widget-heading-warning-color": string;
	"widget-dropdown_menu_button-warning-color": string;

	"widget-danger-background-color": string;
	"widget-danger-border-color": string;
	"widget-heading-danger-background-color": string;
	"widget-heading-danger-color": string;
	"widget-dropdown_menu_button-danger-color": string;

	"widget-success-background-color": string;
	"widget-success-border-color": string;
	"widget-heading-success-background-color": string;
	"widget-heading-success-color": string;
	"widget-dropdown_menu_button-success-color": string;

	"widget-info-background-color": string;
	"widget-info-border-color": string;
	"widget-heading-info-background-color": string;
	"widget-heading-info-color": string;
	"widget-dropdown_menu_button-info-color": string;
};

export type CssChartGlobalHexColors = {
	"linechart-stat_title-text-color": string;
	"linechart-stat_value-text-color": string;
	"chart-label-text-color": string;
};

type CssSemanticHexColors = {
	"warning-color": string;
	"success-color": string;
	"danger-color": string;
	"info-color": string;
};

type CssAlertGlobalHexColors = {
	"alert-warning-background-color": string;
	"alert-warning-text-color": string;
	"alert-danger-background-color": string;
	"alert-danger-text-color": string;
	"alert-success-background-color": string;
	"alert-success-text-color": string;
	"alert-info-background-color": string;
	"alert-info-text-color": string;
};

export type CssButtonGlobalHexColors = {
	"button-background-color": string;
	"button-background-hover-color": string;
	"button-background-active-color": string;
	"button-background-active-hover-color": string;
	"button-background-disabled-color": string;
	"button-border-color": string;
	"button-border-hover-color": string;
	"button-border-active-color": string;
	"button-border-active-hover-color": string;
	"button-border-disabled-color": string;
	"button-text-color": string;
	"button-text-hover-color": string;
	"button-text-active-color": string;
	"button-text-active-hover-color": string;
	"button-text-disabled-color": string;
	"switch-button-background-disabled-color": string;
};

export type CssInputGlobalHexColors = {
	"input-background-color": string;
	"input-border-color": string;
	"input-text-color": string;
	"input-text-placeholder-color": string;
	"input-border-focus-color": string;
	"input-text-disabled-color": string;
};

type CssRadioGlobalHexColors = {
	"radio-background-color": string;
	"radio-label-color": string;
	"radio-background-checked-color": string;
	"radio-label-disabled-color": string;
};

type CssCheckboxGlobalHexColors = {
	"checkbox-background-color": string;
	"checkbox-check_icon-color": string;
	"checkbox-label-color": string;
	"checkbox-background-checked-color": string;
	"checkbox-label-disabled-color": string;
};

type CssSwitchGlobalHexColors = {
	"switch-background-color": string;
	"switch-background-checked-color": string;
	"switch-background-hover-color": string;
	"switch-thumb-background-color": string;
	"switch-thumb-background-hover-color": string;
	"switch-background-checked-hover-color": string;
	"switch-background-disabled-color": string;
	"switch-thumb-background-disabled-color": string;
	"switch-background-checked-disabled-color": string;
};

type CssLabelGlobalHexColors = {
	"label-text-color": string;
};

type CssTableGlobalHexColors = {
	"table-row_group_icon-color": string;
	"table-row_group_icon-background-color": string;
};

type CssInputGroupGlobalHexColors = {
	"input_group-addon-color": string;
	"input_group-addon-background-color": string;
};

export type CssSelectGlobalHexColors = {
	"select-control-background-color": string;
	"select-control-border-color": string;
	"select-control-text-color": string;
	"select-placeholder-color": string;
	"select-control-border-focus-color": string;
	"select-control-disabled-color": string;
	"select-menulist-background-color": string;
	"select-singlevalue-text-color": string;
	"select-multivalue-background-color": string;
	"select-multivalue-text-color": string;
	"select-option-background-selected-color": string;
	"select-option-background-hover-color": string;
	"select-option-text-color": string;
	"select-indicator-text-color": string;
};

type CssProgressBarGlobalHexColors = {
	"progressbar-background-color": string;
	"progressbar-content-color": string;
	"progressbar-text-color": string;
};

type CssTitleBarGlobalHexColors = {
	"titlebar-background-color": string;
	"titlebar-text-color": string;
};

type CssContentBoxGlobalHexColors = {
	"contentbox-background-color": string;
};

type CssAccordionGlobalHexColors = {
	"accordion-background-color": string;
	"accordion-text-color": string;
};

type CssSectionTitleGlobalHexColors = {
	"sectiontitle-background-color": string;
	"sectiontitle-text-color": string;
	"toggleGroup-background-color": string;
};

export type ComputedCssGlobalColors = CssBodyGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssSidebarGlobalHexColors &
	CssWidgetGlobalHexColors &
	CssChartGlobalHexColors &
	CssSemanticHexColors &
	CssInputGlobalHexColors &
	CssLabelGlobalHexColors &
	CssRadioGlobalHexColors &
	CssButtonGlobalHexColors &
	CssCheckboxGlobalHexColors &
	CssTableGlobalHexColors &
	CssSwitchGlobalHexColors &
	CssInputGroupGlobalHexColors &
	CssProgressBarGlobalHexColors &
	CssSelectGlobalHexColors &
	CssAccordionGlobalHexColors &
	CssTitleBarGlobalHexColors &
	CssContentBoxGlobalHexColors &
	CssSectionTitleGlobalHexColors;

export function getComputedCssGlobalColors(
	variables: CssTailwindGlobalHexColors & Partial<ComputedCssGlobalColors>
): ComputedCssGlobalColors {
	const primaryColor = variables["primary-color"];
	const secondaryColor = variables["secondary-color"];

	return new TypedMergeable({
		"body-background-color":
			variables["body-background-color"] ?? adjustColorBrightness(secondaryColor, -6),
		"navbar-background-color": variables["navbar-background-color"] ?? primaryColor,

		"progressbar-background-color": variables["progressbar-background-color"] ?? secondaryColor,

		"sidebar-background-color": variables["sidebar-background-color"] ?? secondaryColor,

		"accordion-background-color":
			variables["accordion-background-color"] ?? adjustColorBrightness(secondaryColor, -10),

		"switch-background-color": variables["switch-background-color"] ?? "#8c8c8c",
		"switch-thumb-background-color": variables["switch-thumb-background-color"] ?? secondaryColor,
		"switch-background-checked-color": variables["switch-background-checked-color"] ?? primaryColor,

		"chart-label-text-color": variables["chart-label-text-color"] ?? "#8c8c8c",
		"warning-color": variables["warning-color"] ?? "#e28722",
		"danger-color": variables["danger-color"] ?? "#e74c3c",
		"success-color": variables["success-color"] ?? "#07bc0c",
		"info-color": variables["info-color"] ?? "#3498db",
	}).merge((obj) => ({
		"accordion-text-color":
			variables["accordion-text-color"] ??
			(getBrightness(obj["progressbar-background-color"]) > 125
				? "#000"
				: adjustColorBrightness("#ffffff", 0)),

		"navbar-item-text-color":
			variables["navbar-item-text-color"] ?? getContrastColor(obj["navbar-background-color"]),
		"navbar-item-background-hover-color":
			variables["navbar-item-background-hover-color"] ??
			adjustColorBrightness(obj["navbar-background-color"], 10),
		"navbar-item-border-focus-color":
			variables["navbar-item-border-focus-color"] ??
			getContrastColor(obj["navbar-background-color"]),
		"navbar-dropdown_menu-background-color":
			variables["navbar-dropdown_menu-background-color"] ??
			(getContrastColor(obj["navbar-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"navbar-dropdown_menu_item-background-hover-color":
			variables["navbar-dropdown_menu_item-background-hover-color"] ??
			(getBrightness(obj["navbar-background-color"]) > 125
				? adjustColorBrightness("#ffffff", -10)
				: adjustColorBrightness("#1a1a1a", 50)),
		"navbar-dropdown_menu-border-color":
			variables["navbar-dropdown_menu-border-color"] ??
			getContrastColor(obj["navbar-background-color"]),
		"navbar-dropdown_menu_item-text-color":
			variables["navbar-dropdown_menu_item-text-color"] ??
			getContrastColor(obj["navbar-background-color"]),

		"progressbar-content-color": variables["progressbar-content-color"] ?? primaryColor,
		"progressbar-text-color":
			variables["progressbar-text-color"] ??
			(getBrightness(obj["progressbar-background-color"]) > 125
				? secondaryColor
				: adjustColorBrightness("#ffffff", -10)),

		"sidebar-header-background-color": variables["sidebar-header-background-color"] ?? "",
		"sidebar-header-background-hover-color":
			variables["sidebar-header-background-hover-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -10),
		"sidebar-header-text-color":
			variables["sidebar-header-text-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -540),
		"sidebar-trigger-background-color":
			variables["sidebar-trigger-background-color"] ?? obj["sidebar-background-color"],
		"sidebar-trigger_text-color":
			variables["sidebar-trigger_text-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-trigger_icon-color":
			variables["sidebar-trigger_icon-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-trigger-background-active-color":
			variables["sidebar-trigger-background-active-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -8),
		"sidebar-trigger_text-active-color":
			variables["sidebar-trigger_text-active-color"] ?? primaryColor,
		"sidebar-trigger_icon-active-color":
			variables["sidebar-trigger_icon-active-color"] ?? primaryColor,
		"sidebar-item-text-color":
			variables["sidebar-item-text-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-item-background-active-color":
			variables["sidebar-item-background-active-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -8)
				: adjustColorBrightness(obj["sidebar-background-color"], 8),
		"sidebar-item-background-hover-color":
			variables["sidebar-item-background-hover-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -6)
				: adjustColorBrightness(obj["sidebar-background-color"], 6),
		"sidebar-content-background-active-color":
			variables["sidebar-content-background-active-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -4)
				: adjustColorBrightness(obj["sidebar-background-color"], 4),

		"switch-background-checked-color": variables["switch-background-checked-color"] ?? primaryColor,
		"switch-thumb-background-color":
			variables["switch-thumb-background-color"] ??
			getBrightness(obj["switch-background-color"]) > 125
				? adjustColorBrightness(obj["switch-background-color"], 100)
				: adjustColorBrightness(obj["switch-background-color"], -50),
		"switch-background-hover-color":
			variables["switch-background-hover-color"] ??
			adjustColorBrightness(obj["switch-background-color"], -30),
		"switch-background-checked-hover-color":
			variables["switch-background-checked-hover-color"] ??
			adjustColorBrightness(obj["switch-background-checked-color"], -30),
		"switch-thumb-background-hover-color":
			variables["switch-thumb-background-hover-color"] ??
			adjustColorBrightness(obj["switch-background-color"], 50),
		"switch-background-disabled-color":
			variables["switch-background-disabled-color"] ??
			adjustColorBrightness(obj["switch-background-color"], 50),
		"switch-thumb-background-disabled-color":
			variables["switch-thumb-background-disabled-color"] ??
			getBrightness(obj["switch-background-color"]) > 125
				? adjustColorBrightness(obj["switch-background-color"], 100)
				: adjustColorBrightness(obj["switch-background-color"], -50),
		"switch-background-checked-disabled-color":
			variables["switch-background-checked-disabled-color"] ??
			addAlpha(obj["switch-background-checked-color"], 0.5),

		"widget-background-color":
			variables["widget-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"widget-border-color": variables["widget-border-color"] ?? "#b3b3b3",
		"widget-heading-background-color":
			variables["widget-heading-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"widget-heading-color":
			variables["widget-heading-color"] ?? getContrastColor(obj["body-background-color"]),
		"widget-content-color": variables["widget-content-color"] ?? "#8c8c8c",
		"widget-dropdown_menu_button-color":
			variables["widget-dropdown_menu_button-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-background-color":
			variables["widget-dropdown_menu-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 20),
		"widget-dropdown_menu-text-color":
			variables["widget-dropdown_menu-text-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-background-hover-color":
			variables["widget-dropdown_menu-background-hover-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-text-hover-color":
			variables["widget-dropdown_menu-text-hover-color"] ??
			(getContrastColor(obj["body-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"widget-dropdown_menu-background-active-color":
			variables["widget-dropdown_menu-background-active-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-text-active-color":
			variables["widget-dropdown_menu-text-active-color"] ??
			(getContrastColor(obj["body-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"widget-warning-background-color":
			variables["widget-warning-background-color"] ??
			(getBrightness(primaryColor) > 125
				? adjustColorBrightness(obj["warning-color"], 600)
				: adjustColorBrightness(obj["warning-color"], -87)),
		"widget-warning-border-color": variables["widget-warning-border-color"] ?? obj["warning-color"],
		"widget-heading-warning-background-color":
			variables["widget-heading-warning-background-color"] ?? obj["warning-color"],
		"widget-heading-warning-color": variables["widget-heading-warning-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-warning-color":
			variables["widget-dropdown_menu_button-warning-color"] ?? "#ffffff",
		"widget-danger-background-color":
			variables["widget-danger-background-color"] ??
			(getBrightness(primaryColor) > 125
				? "#f5eced"
				: adjustColorBrightness(obj["danger-color"], -87)),
		"widget-danger-border-color": variables["widget-danger-border-color"] ?? obj["danger-color"],
		"widget-heading-danger-background-color":
			variables["widget-heading-danger-background-color"] ?? obj["danger-color"],
		"widget-heading-danger-color": variables["widget-heading-danger-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-danger-color":
			variables["widget-dropdown_menu_button-danger-color"] ?? "#ffffff",
		"widget-success-background-color":
			variables["widget-success-background-color"] ??
			(getBrightness(primaryColor) > 125
				? adjustColorBrightness(obj["success-color"], 3350)
				: adjustColorBrightness(obj["success-color"], -87)),
		"widget-success-border-color": variables["widget-success-border-color"] ?? obj["success-color"],
		"widget-heading-success-background-color":
			variables["widget-heading-success-background-color"] ?? obj["success-color"],
		"widget-heading-success-color": variables["widget-heading-success-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-success-color":
			variables["widget-dropdown_menu_button-success-color"] ?? "#ffffff",
		"widget-info-background-color":
			variables["widget-info-background-color"] ??
			(getBrightness(primaryColor) > 125
				? "#f2faff"
				: adjustColorBrightness(obj["info-color"], -87)),
		"widget-info-border-color": variables["widget-info-border-color"] ?? obj["info-color"],
		"widget-heading-info-background-color":
			variables["widget-heading-info-background-color"] ?? obj["info-color"],
		"widget-heading-info-color": variables["widget-heading-info-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-info-color":
			variables["widget-dropdown_menu_button-info-color"] ?? "#ffffff",
		"linechart-stat_title-text-color": variables["linechart-stat_title-text-color"] ?? "#aaaaaa",
		"linechart-stat_value-text-color":
			variables["linechart-stat_value-text-color"] ??
			getContrastColor(obj["body-background-color"]),

		...getComputedCssButtonColors(
			{
				"button-background-color": variables["button-background-color"] ?? primaryColor,
			},
			"contained"
		),

		"input-background-color":
			variables["input-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"input-border-color": variables["input-border-color"] ?? "#b3b3b3",
		"input-text-color":
			variables["input-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"input-text-placeholder-color":
			variables["input-text-placeholder-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#bfbfbf" : "#a6a6a6"),
		"input-border-focus-color": variables["input-border-focus-color"] ?? primaryColor,
		"input-text-disabled-color":
			variables["input-text-disabled-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#b3b3b3" : "#a6a6a6"),
		"label-text-color":
			variables["label-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#262626" : "#d9d9d9"),
		"radio-background-color":
			variables["radio-background-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#d9d9d9" : "#737373"),
		"radio-label-color":
			variables["radio-label-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"radio-background-checked-color": variables["radio-background-checked-color"] ?? primaryColor,
		"radio-label-disabled-color":
			variables["radio-label-disabled-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#8c8c8c" : "#a6a6a6"),
		"checkbox-background-color":
			variables["checkbox-background-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#d9d9d9" : "#737373"),
		"checkbox-label-color":
			variables["checkbox-label-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"checkbox-check_icon-color":
			variables["checkbox-check_icon-color"] ??
			(getContrastColor(obj["body-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"checkbox-background-checked-color":
			variables["checkbox-background-checked-color"] ?? primaryColor,
		"checkbox-label-disabled-color":
			variables["checkbox-label-disabled-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#8c8c8c" : "#a6a6a6"),
		"table-row_group_icon-color":
			variables["table-row_group_icon-color"] ??
			(getBrightness(primaryColor) > 125 ? "#646464" : "#ebebeb"),
		"table-row_group_icon-background-color":
			variables["table-row_group_icon-background-color"] ??
			(getBrightness(primaryColor) > 125 ? "#ffffff" : "#000000"),
		"input_group-addon-color":
			variables["input_group-addon-color"] ??
			(getBrightness(primaryColor) > 125 ? "#495057" : "#c8ccd0"),
		"input_group-addon-background-color":
			variables["input_group-addon-background-color"] ??
			(getBrightness(primaryColor) > 125 ? "#e9ecef" : "#151a1e"),

		"select-control-background-color":
			variables["select-control-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"select-control-border-color": variables["select-control-border-color"] ?? "#b3b3b3",
		"select-control-text-color":
			variables["select-control-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"select-placeholder-color":
			variables["select-placeholder-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#bfbfbf" : "#a6a6a6"),
		"select-control-border-focus-color":
			variables["select-control-border-focus-color"] ?? primaryColor,
		"select-menulist-background-color":
			variables["select-menulist-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"select-singlevalue-text-color":
			variables["select-singlevalue-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"select-multivalue-background-color":
			variables["select-multivalue-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 1),
		"select-multivalue-text-color":
			variables["select-multivalue-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"select-option-background-selected-color":
			variables["select-option-background-selected-color"] ??
			adjustColorBrightness(obj["body-background-color"], 1),
		"select-option-background-hover-color":
			variables["select-option-background-hover-color"] ??
			adjustColorBrightness(obj["body-background-color"], 1),
		"select-option-text-color":
			variables["select-option-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"select-indicator-text-color":
			variables["select-indicator-text-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#666666" : "#d9d9d9"),
		"select-control-disabled-color":
			variables["select-control-disabled-color"] ??
			(getBrightness(obj["body-background-color"]) > 125 ? "#b3b3b3" : "#a6a6a6"),
		"titlebar-background-color":
			variables["titlebar-background-color"] ??
			(getBrightness(primaryColor) > 125 ? "#e6e6e6" : "#151a1e"),
		"titlebar-text-color":
			variables["titlebar-text-color"] ??
			(getBrightness(primaryColor) > 125 ? "#262626" : "#d6d9dc"),
		"contentbox-background-color":
			variables["contentbox-background-color"] ?? getBrightness(primaryColor) > 125
				? "#ffffff"
				: "#151a1e",
		"sectiontitle-background-color":
			variables["sectiontitle-background-color"] ??
			(getBrightness(primaryColor) > 125 ? "#f6f6f6" : "#0d0d0d"),
		"sectiontitle-text-color":
			variables["sectiontitle-text-color"] ??
			(getBrightness(primaryColor) > 125 ? "#262626" : "#d9d9d9"),
		"toggleGroup-background-color":
			variables["toggleGroup-background-color"] ??
			(getBrightness(primaryColor) > 125 ? adjustColorBrightness(primaryColor, -10) : "#fff"),
	})).value;
}

export type ButtonVariant = "contained" | "outlined" | "text";

export function getComputedCssButtonColors(
	variables: Required<Pick<CssButtonGlobalHexColors, "button-background-color">> &
		Partial<CssButtonGlobalHexColors>,
	variant: ButtonVariant
): CssButtonGlobalHexColors {
	return new TypedMergeable({
		"button-background-color": variables["button-background-color"],
	}).merge((obj) => ({
		"button-background-hover-color":
			variables["button-background-hover-color"] ??
			// adjustColorBrightness(obj["button-background-color"], -5),
			getBrightness(obj["button-background-color"]) < 125
				? adjustColorBrightness(obj["button-background-color"], 10)
				: adjustColorBrightness(obj["button-background-color"], -10),

		"button-background-active-color":
			variables["button-background-active-color"] ??
			adjustColorBrightness(obj["button-background-color"], -50),

		"button-background-active-hover-color":
			variables["button-background-active-hover-color"] ??
			adjustColorBrightness(variables["button-background-color"], 10),

		"button-background-disabled-color":
			variables["button-background-disabled-color"] ??
			addAlpha(obj["button-background-color"], 0.5),

		"button-border-color": variables["button-border-color"] ?? obj["button-background-color"],

		"button-border-hover-color":
			variables["button-border-hover-color"] ??
			adjustColorBrightness(variables["button-background-color"], 50),

		"button-border-active-color":
			variables["button-border-active-color"] ?? getContrastColor(obj["button-background-color"]),
		"button-border-active-hover-color":
			variables["button-border-active-hover-color"] ??
			adjustColorBrightness(variables["button-background-color"], 10),
		"button-border-disabled-color": addAlpha(obj["button-background-color"], 0.5),
		"button-text-color":
			variables["button-text-color"] ?? variant === "contained"
				? getContrastColor(obj["button-background-color"])
				: obj["button-background-color"],

		"button-text-active-color":
			variables["button-background-hover-color"] ??
			getContrastColor("button-background-active-color"),
		"button-text-active-hover-color":
			variables["button-background-hover-color"] ??
			getContrastColor("button-background-hover-color"),

		"switch-button-background-disabled-color": addAlpha(obj["button-background-color"], 0.8),
		"button-text-disabled-color":
			variant === "contained"
				? addAlpha(getContrastColor(obj["button-background-color"]), 0.5)
				: addAlpha(obj["button-background-color"], 0.5),

		"button-text-hover-color":
			variables["button-text-hover-color"] ?? getContrastColor(obj["button-background-color"]),
	})).value;
}

export function mapPropetiesToCss(
	tailwindColors: CssTailwindGlobalHexColors,
	colors: CssBodyGlobalHexColors &
		CssNavbarGlobalHexColors &
		CssSidebarGlobalHexColors &
		CssWidgetGlobalHexColors &
		CssChartGlobalHexColors &
		CssSemanticHexColors &
		CssInputGlobalHexColors &
		CssLabelGlobalHexColors &
		CssRadioGlobalHexColors &
		CssCheckboxGlobalHexColors &
		CssTableGlobalHexColors &
		CssSelectGlobalHexColors
) {
	const result = [];

	result.push(
		...Object.entries(tailwindColors).map(
			([key, value]) =>
				`--${key}: ${hexToRgb(value)!.r} ${hexToRgb(value)!.g} ${hexToRgb(value)!.b};`
		)
	);
	result.push(...Object.entries(colors).map(([key, value]) => `--${key}: ${value};`));

	return result.join("\n");
}

// https://stackoverflow.com/a/5624139
function hexToRgb(hex: string): { r: number; g: number; b: number } {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: { r: 0, g: 0, b: 0 };
}

export function rgbToHex(r: number, g: number, b: number): string {
	const hexR = r.toString(16).padStart(2, "0");
	const hexG = g.toString(16).padStart(2, "0");
	const hexB = b.toString(16).padStart(2, "0");
	return `#${hexR}${hexG}${hexB}`;
}

function getBrightness(hexColor: string): number {
	const rgb = hexToRgb(hexColor)!;

	// http://www.w3.org/TR/AERT#color-contrast
	const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);

	return brightness;
}

// https://stackoverflow.com/a/11868159
function getContrastColor(hexColor: string): string {
	if (hexColor.length > 7) {
		hexColor = hexColor.slice(0, 6);
	}
	const brightness = getBrightness(hexColor);

	return brightness > 125 ? "#000000" : "#ffffff";
}

// from poe.com
function adjustColorBrightness(hexColor: string, percent: number): string {
	// Remove the '#' symbol and convert to RGB
	const rgbColor = hexToRgb(hexColor.substring(1));

	// Adjust brightness
	const adjustedRgbColor = {
		r: Math.round(Math.min(255, (rgbColor.r * (100 + percent)) / 100)),
		g: Math.round(Math.min(255, (rgbColor.g * (100 + percent)) / 100)),
		b: Math.round(Math.min(255, (rgbColor.b * (100 + percent)) / 100)),
	};

	// Convert RGB back to HEX
	const adjustedHexColor = rgbToHex(adjustedRgbColor.r, adjustedRgbColor.g, adjustedRgbColor.b);

	return adjustedHexColor;
}

//https://stackoverflow.com/questions/50890241
export function addAlpha(color: string, opacity: number): string {
	if (color.length === 4) {
		color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
	}
	// coerce values so ti is between 0 and 1.
	const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
	return color + _opacity.toString(16).toUpperCase();
}
