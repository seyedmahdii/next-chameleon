import { configureStore } from "@reduxjs/toolkit";
import UIConfigSlice from "./UIConfig/UIConfigSlice";

const store = configureStore({
	reducer: {
		uiConfig: UIConfigSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
