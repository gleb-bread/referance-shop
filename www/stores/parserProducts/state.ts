import { ParserProductsState, ParserProductsType } from "../types";

export const State: ParserProductsState = {
    products: [] as ParserProductsType[],
    categories: {} as {[key: string]: string[]},
    imagesForCategory: {} as {[key: string]: string},
    loading: false,
    update: false,
    errorLoading: false,
    errorUpdate: false,
}