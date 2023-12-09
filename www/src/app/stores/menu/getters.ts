import { MenuState } from "./state";

export const getters = {
    getMenuTitle(state: MenuState){
        return state.title;
    },

    getMenuNavigationShow(state: MenuState){
        return state.menuNavigationShow;
    },

    getMenuSubcategoriesShow(state: MenuState){
        return state.subcategoriesShow;
    },

    getMenuSubcategoriesBtn(state: MenuState){
        return state.showSubcategoriesBtn;
    }
}