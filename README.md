# آقتاب پرست

تمام مواردی که در یک سیستم مولتی تم نیاز دارید.

## نصب و اجرا

برای شروع کار و تسلط کامل بر نحوه عملکرد این سیستم، ابتدا پروژه را کلون بگیرید:

```
git clone git@github.com:seyedmahdii/multi-theme_system.git
cd ./multi-theme_system
```

پکیج‌های مورد نیاز پروژه را نصب و ران کنید:

```
npm i
npm run dev
```

اکنون میتوانید پروژه در لوکال هاست خود و پورت ۳۰۰۰ مشاهده کنید:

```
localhost:3000
```

## فایل‌های مهم

1. **/src/utils/cssGlobalVariables.ts**
   All CSS variables are defined in this file. The list of variables may vary depending on the needs of each project. You can define variables for each part of the site as follows:

```typescript
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
```

As you can see, variables have been assigned to all colored parts of the navbar. While naming the variables is up to you, I recommend the following naming convention:

```
[component]-[slot(s)]-modifier-[property]-[pseudo(s)]-unit
```

This note is commented at the beginning of this file as well.
For other parts of the site, it is also necessary to fully extract their list of variables:

```typescript
export type ComputedCssGlobalColors = CssBodyGlobalHexColors &
	CssTextGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssHeroGlobalHexColors &
	CssFooterGlobalHexColors;
```

Next, we move on to the `getComputedCssGlobalColors` function, where you bring color to your website with your creativity. This function is responsible for assigning colors to our variables. Here, we dynamically generate the color values for the variables once for all color themes. However, sometimes we might want to overwrite the variables that are automatically generated. The `variables` parameter is designed for this purpose.

For this reason, we first set the color value of each variable to `variables["VARIABLE_NAME"]`, and only assign a dynamic color to it if this value does not already exist:

```typescript
"body-background-color": variables["body-background-color"] ?? getBrightness(primaryColor) > 110
	? adjustColorBrightness(secondaryColor, 40)
	: adjustColorBrightness(secondaryColor, -35)
```

Then the color of each variable is determined. For example, for the background color, we used `primaryColor` and used the `getBrightness` utility function to determine whether `primaryColor` is light or dark, and based on that, we set the background color.

For ease of working with colors, a set of utility functions has been provided for you:

a. **`getBrightness` function:** This function takes a color code as input and returns a number. If the number is greater than 125, it means the color is light; otherwise, it is dark.

b. **`hexToRgb` and `rgbToHex` functions**

c. **`getContrastColor` function:** This function examines the given color and returns its contrasting color.

d. **`addAlpha` function:** This function adds an alpha value to the given color.

e. **`adjustColorBrightness` function:** This function lightens or darkens the given color based on the `percent` parameter.

Finally, we assign the variables to their corresponding elements:

```html
<body className="bg-[--body-background-color]"></body>
```
