import { CartProductItem } from "../types";
import { ObserverRequest } from "@/app/core/requestObserver";

export interface ParserProductsLoading {
    loading: boolean,
    errorLoading: boolean,
}

export interface CartState {
    products: CartProductItem[],
    ObserverRequest: ObserverRequest<ParserProductsLoading>,
    isLastPage: boolean,
    page: number,
}

export const State: CartState = {
    products: [] as CartProductItem[],
    isLastPage: false,
    page: 1,
    ObserverRequest: new ObserverRequest<ParserProductsLoading>(),
}