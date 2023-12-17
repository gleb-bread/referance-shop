import { OrdersState } from "./state";

export const getters = {
    getOrders(state: OrdersState){
        return state.orders;
    },

    getLoading(state: OrdersState){
        return state.ObserverRequest.getMixLoading('loading');
    },
    
    getError(state: OrdersState){
        return state.ObserverRequest.getMixError('errorLoading');
    },
}