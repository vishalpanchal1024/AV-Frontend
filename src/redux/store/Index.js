import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../api";
import LogedInUser from '../slices/LoggedInUser.Slice';
import Sidebar from '../Slices/SideBar.Slice';

export const store = configureStore({
    reducer: {
        [LogedInUser.name]: LogedInUser.reducer,
        [Sidebar.name]: Sidebar.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware),
})