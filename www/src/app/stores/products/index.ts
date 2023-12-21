import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { ProductsState } from './state';


export const useOrdersStore = defineStore('orders', {
    state: (): ProductsState => {
        return State;
    },
    getters: getters,
    actions: actions,
})