import { ParserProductsState, ParserProductsType } from "../types";

export const State: ParserProductsState = {
    products: [] as ParserProductsType[],
    loading: false,
    update: false,
    errorLoading: false,
    errorUpdate: false,
}