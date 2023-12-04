import { ParserProductsState } from "../types";

export const getters = {
    getParserProducts(state: ParserProductsState){
        return state.products;
    },
}