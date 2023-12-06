import { MenuState } from "../types";

export const getters = {
    getMenuShow(state: MenuState){
        return state.menuShow;
    },
    
    getMenuTitle(state: MenuState){
        return state.menuTitle;
    },

    getSubcategoriesShow(state: MenuState){
        return state.subcategoriesShow;
    },

    getCurrectCategory(state: MenuState){
        return state.currectCategory;
    }
}