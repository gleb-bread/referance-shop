import { CartState } from "./state";

export const getters = {
    getProducts(state: CartState){
        return state.products;
    },

    getLoading(state: CartState){
        return state.ObserverRequest.getMixLoading('loading');
    },
    
    getError(state: CartState){
        return state.ObserverRequest.getMixError('errorLoading');
    }
}