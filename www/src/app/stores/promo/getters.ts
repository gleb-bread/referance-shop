import { Store } from "./state";

export const getters = {
    getPromos(store: Store){
        return store.promos;
    }
}