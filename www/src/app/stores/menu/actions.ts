import { MenuState } from './state';

export const actions = {
    setMenuTitle(context: MenuState, title: string){
        context.title = title;
    },

    setMenuNavigationShow(context: MenuState, flag: boolean){
        context.menuNavigationShow = flag;
    },

    setMenuSuncategoriesShow(context: MenuState, flag: boolean){
        context.subcategoriesShow = flag;
    },

    setMenuSubcategoriesBtn(context: MenuState, flag: boolean){
        context.showSubcategoriesBtn = flag;
    }
}