import { ParserProductsType } from "../types";

export interface ParserProductsState {
    products: ParserProductsType[],
    categories: {[key: string]: string[]},
    imagesForCategory: {[key: string]: string},
    loading: boolean,
    update: boolean,
    errorLoading: boolean,
    errorUpdate: boolean,
}

export const State: ParserProductsState = {
    products: [] as ParserProductsType[],
    categories: {} as {[key: string]: string[]},
    imagesForCategory: {} as {[key: string]: string},
    loading: false,
    update: false,
    errorLoading: false,
    errorUpdate: false,
}