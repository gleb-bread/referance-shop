import { ParserProductsState } from "../types";

export const getters = {
    getParserProducts(state: ParserProductsState){
        return state.products;
    },

    getLoading(state: ParserProductsState){
        return state.loading;
    },

    getError(state: ParserProductsState){
        return state.errorLoading;
    }
}