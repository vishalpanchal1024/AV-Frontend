import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeItem: null,
    openSubmenu: null,
    isExpanded: true,
    isHovered: false,
    isMobile: false,
    isMobileOpen: false,
}

const SidebarSlice = createSlice({
    name: "Sidebar",
    initialState: initialState,
    reducers: {
        setIsExpanded: (state) => {
            state.isExpanded = !state.isExpanded;
        },
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setIsMobileOpen: (state, action) => {
            state.isMobileOpen = action.payload;
        },
        setIsHovered: (state, action) => {
            state.isHovered = action.payload;
        },
        setActiveItem: (state, action) => {
            state.activeItem = action.payload;
        },
        toggleSidebar: (state) => {
            state.isExpanded = !state.isExpanded;
        },
        toggleMobileSidebar: (state) => {
            state.isMobileOpen = !state.isMobileOpen;
        },
        toggleSubmenu: (state, action) => {
            state.openSubmenu = state.openSubmenu === action.payload ? null : action.payload;
        }

    },
});

export const { setIsExpanded, setActiveItem, setIsHovered, setIsMobile, setIsMobileOpen, toggleMobileSidebar, toggleSidebar, toggleSubmenu } = SidebarSlice.actions;
export default SidebarSlice;
