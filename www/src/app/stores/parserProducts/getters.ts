import { ParserProductsState } from "./state";

export const getters = {
    getParserProducts(state: ParserProductsState){
        return state.products;
    },

    getParserCategories(state: ParserProductsState){
        return state.categories;
    },

    getParserImageCategories(state: ParserProductsState){
        return state.imagesForCategory;
    },

    getLoading(state: ParserProductsState){
        return state.loading;
    },

    getError(state: ParserProductsState){
        return state.errorLoading;
    }
}