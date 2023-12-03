import { MenuState } from "../types";

export const getters = {
    getMenuShow(state: MenuState){
        return state.menuShow;
    },
    
    getMenuTitle(state: MenuState){
        return state.menuTitle;
    }
}