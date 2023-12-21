import { ProductsState } from "./state";

export const getters = {
    getProducts(state: ProductsState){
        return state.products;
    },

    getLoading(state: ProductsState){
        return state.requestObserver.getMixLoading('loadingProduct');
    },
    
    getError(state: ProductsState){
        return state.requestObserver.getMixError('errorCategory');
    },
}