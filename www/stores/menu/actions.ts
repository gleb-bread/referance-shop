import { MenuState } from "../types";

export const actions = {
    setMenuShow(context: MenuState, flag: boolean){
        context.menuShow = flag;
    },

    setMenuTitle(context: MenuState, str: string){
        context.menuTitle = str;
    },

    setSubcategoriesShow(context: MenuState, flag: boolean){
        context.subcategoriesShow = flag;
    },

    setCurrectCategory(context: MenuState, str: string, flag: boolean){
        context.currectCategory = str;
        if(flag){
            context.subcategoriesShow = true;
        }
    },

    setCurrectSubcategory(context: MenuState, strOrFlag: string | false){
        context.currectSubcategory = strOrFlag;
    }
}