import { OrderType } from "../types";
import { ObserverRequest } from "@/app/core/requestObserver";

export interface ParserProductsLoading {
    loading: boolean,
    errorLoading: boolean,
}

export interface OrdersState {
    orders: OrderType[],
    ObserverRequest: ObserverRequest<ParserProductsLoading>,
    isLastPage: boolean,
    page: number,
}

export const State: OrdersState = {
    orders: [] as OrderType[],
    isLastPage: false,
    page: 1,
    ObserverRequest: new ObserverRequest<ParserProductsLoading>(),
}