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

اکنون میتوانید پروژه در localhost خود و پورت ۳۰۰۰ مشاهده کنید:

```
localhost:3000
```

## فایل‌های مهم

1. **/src/utils/cssGlobalVariables.ts**
   تمام متغییرهای css در این فایل تعریف می شوند. لیست متغییرها بسته به نیاز هر پروژه متفاوت است. میتواند برای هر قسمت از سایت متغییرها را به صورت زیر تعریف کنید:

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

همانطور که میبینید برای تمامی قسمت های رنگی navbar، متغییر اختصاص داده شده است. با اینکه اسم گذاری متغییرها به شما بستگی دارد، من روش نام گذاری پایین را به شما پیشنهاد میکنم:

```
[component]-[slot(s)]-modifier-[property]-[pseudo(s)]-unit
```

این نکته در ابتدای همین فایل کامنت شده است.
برای سایر قسمت های سایت نیز لازم است تا لیست متغییرهایش کامل اسختراج شوند:

```typescript
export type ComputedCssGlobalColors = CssBodyGlobalHexColors &
	CssTextGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssHeroGlobalHexColors &
	CssFooterGlobalHexColors;
```

در ادامه به سراغ تابع `getComputedCssGlobalColors` میرویم. جایی که شما با خلاقیت خود به وبسایتتان رنگ می بخشید. این تابع وظیفه دارد تا کد رنگ ها را به متغییرهایمان اختصاص دهد. ما مقدار رنگ های متغییرها را اینجا یک بار به صورت داینامیک برای تمام تم رنگ ها میسازیم. اما گاهی ممکن است بخواهیم متغییرهایی که بصورت خودکار ساخته شده اند را overwrite کنیم. پارامتر `variables` برای این کار تعبیه شده است.

به همین علت مقدار رنگ هر متغییر را ابتدا `variables["VARIABLE_NAME"]` قرار میدهیم و تنها در صورتی رنگ داینامیک را به ان اساین میکنیم که این مقدار وجود نداشته باشد:

```typescript
"body-background-color": variables["body-background-color"] ?? getBrightness(primaryColor) > 110
	? adjustColorBrightness(secondaryColor, 40)
	: adjustColorBrightness(secondaryColor, -35)
```

رنگ هر متغییر به صورت مرحله ای تعیین می شود. برای مثال برای رنگ پس زمینه، از `primaryColor` استفاده کردیم و با استفاده از `getBrightness` utility function روشن بودن یا تیره بودن `primaryColor` را تشخیص دادیم و براساس آن رنگ پس زمینه را تعیین کردیم

برای راحتی در کار با رنگ ها یک سری utility function برای شما تهیه شده است:

۱.۱. **تابع `getBrightness`:** این تابع یک کد رنگ را ورودی میگیرد و یک عدد به شما برمیگرداند. اگر این عدد بیشتر از ۱۲۵ بود یعنی رنگ شما یک رنگ روشن و در غیر این صورت تیره است.

۱.۲. **تابع `hexToRgb` and `rgbToHex`**

۱.۳. **تابع `getContrastColor`:** این تابع رنگ داده داده شده را بررسی میکند و رنگ متضاد آن را برمیگرداند.

۱.۴. **تابع `addAlpha`:** مقدار `alpha` به رنگ داده شده اضافه میکند.

۱.۵. **تابع `adjustColorBrightness`:** این تابع رنگ داده شده را براساس پارامتر `percent` تیره تر ویا روشن تر میکند.

در نهایت متغییر ها به عناصر متناظر اختصاص میدهیم:

```html
<body className="bg-[--body-background-color]"></body>
```

2. **/src/redux/UIConfig/UIConfigSlice.ts**
   در این فایل کانفیگ کلی مربوط به UI سایت تعریف شده است. در متغییر `themes` تم های موجود را تعریف کرده ایم. در حال حاضر ۴ تم تعریف شده است. شما میتوانید بسته به نیاز پروژه خود این را تعریف کنید:

```typescript
export type Themes = "light" | "dark" | "gold" | "cherryRed";
export const themes: Record<Themes, Partial<ComputedCssGlobalColors> & CssTailwindGlobalHexColors> =
	{
		light: {
			"primary-color": "#4A6CF7",
			"secondary-color": "#b1c1ff",
		},
		dark: {
			"primary-color": "#082ec4",
			"secondary-color": "#031149",
		},
		gold: {
			"primary-color": "#e6ac00",
			"secondary-color": "#fff2cc",
		},
		cherryRed: {
			"primary-color": "#CF0234",
			"secondary-color": "#feb3c6",
			"body-color": "#ffe6ec",
			"navbar-heading-color": "#ffffff",
		},
	};
```

دقت کنید که کلیدهای `primary-color` و `secondary-color` اجباری هستند. همانطور که میبینید برای تم رنگی `cherryRed` علاوه بر این دو رنگ، رنگ ۲ متغییر دیگر نیز تهیه شده است.
