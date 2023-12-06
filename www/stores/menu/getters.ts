import { MenuState } from "../types";

export const getters = {
    getMenuShow(state: MenuState){
        return state.menuShow;
    },
    
    getMenuTitle(state: MenuState){
        return state.menuTitle;
    },

    getPageType(state: MenuState){
        return state.pageNow;
    },

    getSubcategoriesShow(state: MenuState){
        return state.subcategoriesShow;
    },

    getCurrectSubcategory(state: MenuState){
        return state.currectSubcategory;
    },

    getCurrectCategory(state: MenuState){
        return state.currectCategory;
    }
}