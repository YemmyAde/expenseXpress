import { configureStore } from "@reduxjs/toolkit";
import expenseTracking from "./features/expenseTracking/expenseTrackingSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            expense: expenseTracking
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
