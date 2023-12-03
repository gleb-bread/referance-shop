import { MenuState } from "../types";

export const actions = {
    setMenuShow(context: MenuState, flag: boolean){
        context.menuShow = flag;
    },

    setMenuTitle(context: MenuState, str: string){
        context.menuTitle = str;
    }
}