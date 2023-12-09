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
        return state.requestObserver.getMixLoading('loadingCategory', 'loadingImg', 'loadingProduct');
    },

    getError(state: ParserProductsState){
        return state.requestObserver.getMixError('errorCategory', 'errorImg', 'errorProduct')
    },

    getIsLastPage(state: ParserProductsState){
        return state.isLastPage;
    },

    getPageCount(state: ParserProductsState){
        return state.page;
    }

}