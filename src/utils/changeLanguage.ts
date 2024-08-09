import store from "../redux/configureStore";
import { uiConfigSlice } from "../redux/UIConfig/UIConfigSlice";

type TDirections = "ltr" | "rtl";

export const changeLanguage = (dir: TDirections) => {
	store.dispatch(uiConfigSlice.actions.setDir(dir));
	if (dir === "ltr") {
		store.dispatch(uiConfigSlice.actions.setLang("en"));
	} else if (dir === "rtl") {
		store.dispatch(uiConfigSlice.actions.setLang("fa"));
	}

	const body = document.body;
	body?.setAttribute("dir", dir);
};
