import { ParserProductsType } from "../types";
import { ObserverRequest } from "@/app/core/requestObserver";

// export interface ParserProductsLoading {
//     loadingImg: boolean,
//     loadingCategory: boolean,
//     loadingProduct: boolean,
//     updateProduct: boolean,
//     errorImg: boolean,
//     errorCategory: boolean,
//     errorProduct: boolean,
//     errorupdateProduct: boolean,
// }

export interface MenuState {
    title: string,
    menuNavigationShow: boolean,
    subcategoriesShow: boolean,
    showSubcategoriesBtn: boolean,
    subcategoriesList: string[],
}

export const State: MenuState = {
    title: 'Каталог',
    menuNavigationShow: false,
    subcategoriesShow: false,
    showSubcategoriesBtn: false,
    subcategoriesList: [] as string[],
}