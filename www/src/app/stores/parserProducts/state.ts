import { ParserProductsType } from "../types";
import { ObserverRequest } from "@/app/core/requestObserver";

export interface ParserProductsLoading {
    loadingImg: boolean,
    loadingCategory: boolean,
    loadingProduct: boolean,
    updateProduct: boolean,
    errorImg: boolean,
    errorCategory: boolean,
    errorProduct: boolean,
    errorupdateProduct: boolean,
}

export interface ParserProductsState {
    products: ParserProductsType[],
    categories: {[key: string]: string[]},
    imagesForCategory: {[key: string]: string},
    requestObserver: ObserverRequest<ParserProductsLoading>,
}

export const State: ParserProductsState = {
    products: [] as ParserProductsType[],
    categories: {} as {[key: string]: string[]},
    imagesForCategory: {} as {[key: string]: string},
    requestObserver: new ObserverRequest<ParserProductsLoading>(),
}