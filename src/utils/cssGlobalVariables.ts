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

export type CssTextGlobalHexColors = {
	"title-color": string;
	"body-color": string;
};

export type CssNavbarGlobalHexColors = {
	"navbar-background-color-sticky": string;
	"navbar-shadow-color-sticky": string;
	"navbar-heading-color": string;
	"navbar-item-text-color": string;
	"navbar-item-text-hover-color": string;
	"navbar-item-text-active-color": string;
	"navbar-dropdown_menu-background-color": string;
	"navbar-dropdown_menu_item-background-hover-color": string;
	"navbar-dropdown_menu-border-color": string;
};

export type CssHeroGlobalHexColors = {
	"hero-background-color": string;
	"hero-svg-circle-primary-color": string;
	"hero-svg-circle-secondary-color": string;
	"hero-svg-circle-tertiary-color": string;
};

export type CssButtonGlobalHexColors = {
	"button-text-color--fill": string;
};

export type CssFooterGlobalHexColors = {
	"footer-background-color": string;
};

export type ComputedCssGlobalColors = CssBodyGlobalHexColors &
	CssTextGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssHeroGlobalHexColors &
	CssFooterGlobalHexColors &
	CssButtonGlobalHexColors;

export function getComputedCssGlobalColors(
	variables: CssTailwindGlobalHexColors & Partial<ComputedCssGlobalColors>
): ComputedCssGlobalColors {
	const primaryColor = variables["primary-color"];
	const secondaryColor = variables["secondary-color"];

	return new TypedMergeable({
		"body-background-color":
			variables["body-background-color"] ??
			(getBrightness(primaryColor) > 110
				? adjustColorBrightness(secondaryColor, 45)
				: adjustColorBrightness(secondaryColor, -35)),
		"title-color":
			variables["title-color"] ?? (getBrightness(primaryColor) > 110 ? "#121723" : "#FFFFFF"),

		"hero-background-color":
			variables["hero-background-color"] ??
			(getBrightness(primaryColor) > 110
				? adjustColorBrightness(secondaryColor, 80)
				: adjustColorBrightness(secondaryColor, -25)),

		"navbar-background-color-sticky":
			variables["navbar-background-color-sticky"] ??
			(getBrightness(primaryColor) > 110
				? adjustColorBrightness(secondaryColor, 40)
				: adjustColorBrightness(secondaryColor, -40)),

		"footer-background-color":
			variables["footer-background-color"] ??
			(getBrightness(primaryColor) > 110
				? adjustColorBrightness(secondaryColor, 38)
				: adjustColorBrightness(secondaryColor, -38)),
		"button-text-color--fill":
			variables["button-text-color--fill"] ?? getContrastColor(primaryColor),
	}).merge((obj) => ({
		"body-color":
			variables["body-color"] ??
			(getContrastColor(obj["title-color"]) === "#000000"
				? "#959CB1" // for dark themes
				: "#788293"), // for light themes
		// CssHeroGlobalHexColors
		"hero-svg-circle-primary-color": variables["hero-svg-circle-primary-color"] ?? primaryColor,
		"hero-svg-circle-secondary-color":
			variables["hero-svg-circle-secondary-color"] ?? secondaryColor,
		"hero-svg-circle-tertiary-color": primaryColor,

		// CssNavbarGlobalHexColors
		"navbar-shadow-color-sticky":
			variables["navbar-shadow-color-sticky"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? "rgba(0, 0, 0, 0.1)"
				: "rgba(255, 255, 255, 0.1)"),
		"navbar-heading-color":
			variables["navbar-heading-color"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? adjustColorBrightness(primaryColor, -60)
				: adjustColorBrightness(primaryColor, 60)),
		"navbar-item-text-color":
			variables["navbar-item-text-color"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? "#1D2430"
				: "#FFFFFF"),
		"navbar-item-text-active-color":
			variables["navbar-item-text-active-color"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? primaryColor
				: "#FFFFFF"),
		"navbar-item-text-hover-color":
			variables["navbar-item-text-hover-color"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? primaryColor
				: "#FFFFFF"),
		"navbar-dropdown_menu-background-color":
			variables["navbar-dropdown_menu-background-color"] ?? obj["navbar-background-color-sticky"],
		"navbar-dropdown_menu_item-background-hover-color":
			variables["navbar-dropdown_menu_item-background-hover-color"] ??
			(getBrightness(primaryColor) > 110
				? adjustColorBrightness(secondaryColor, 32)
				: adjustColorBrightness(primaryColor, -32)),
		"navbar-dropdown_menu-border-color":
			variables["navbar-dropdown_menu-border-color"] ??
			(getContrastColor(obj["navbar-background-color-sticky"]) === "#000000"
				? "rgba(0, 0, 0, 0.1)"
				: "rgba(255, 255, 255, 0.1)"),
	})).value;
}

export type ButtonVariant = "contained" | "outlined" | "text";

export function mapPropertiesToCss(
	tailwindColors: CssTailwindGlobalHexColors,
	colors: CssBodyGlobalHexColors
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

// > 125 is light, < 125 is dark
export function getBrightness(hexColor: string): number {
	const rgb = hexToRgb(hexColor)!;

	// http://www.w3.org/TR/AERT#color-contrast
	const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);

	return brightness;
}

// https://stackoverflow.com/a/11868159
export function getContrastColor(hexColor: string): "#000000" | "#ffffff" {
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
