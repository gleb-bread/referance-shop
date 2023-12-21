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

export interface ProductsState {
    products: ParserProductsType[],
    categories: {[key: string]: string[]},
    subcategoryShow: boolean,
    imagesForCategory: {[key: string]: string},
    isLastPage: boolean,
    page: number,
    requestObserver: ObserverRequest<ParserProductsLoading>,
}

export const State: ProductsState = {
    products: [] as ParserProductsType[],
    categories: {} as {[key: string]: string[]},
    imagesForCategory: {} as {[key: string]: string},
    subcategoryShow: false,
    page: 0,
    isLastPage: false,
    requestObserver: new ObserverRequest<ParserProductsLoading>(),
}