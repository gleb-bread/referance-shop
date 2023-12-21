import { ProductsState } from "./state";

export const getters = {
    getOrders(state: ProductsState){
        return state.orders;
    },

    getLoading(state: ProductsState){
        return state.ObserverRequest.getMixLoading('loading');
    },
    
    getError(state: ProductsState){
        return state.ObserverRequest.getMixError('errorLoading');
    },
}