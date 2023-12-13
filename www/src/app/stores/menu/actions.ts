import { MenuState } from './state';

export const actions = {
    setMenuTitle(context: MenuState, title: string){
        context.title = title;
    },

    setMenuNavigationShow(context: MenuState, flag: boolean){
        context.menuNavigationShow = flag;
    },

    setMenuSuncategoriesShow(context: MenuState, flag: boolean){
        context.cartShow = false;
        context.subcategoriesShow = flag;
    },

    setMenuSubcategoriesBtn(context: MenuState, flag: boolean){
        context.showSubcategoriesBtn = flag;
    },

    setSubcategoriesList(context: MenuState, listSubcategories: string[]){
        context.subcategoriesList = listSubcategories;
    },

    setCartShow(context: MenuState, flag: boolean){
        context.subcategoriesShow = false;
        context.cartShow = flag;
    }
}