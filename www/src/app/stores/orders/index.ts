import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { OrdersState } from './state';


export const useOrdersStore = defineStore('orders', {
    state: (): OrdersState => {
        return State;
    },
    getters: getters,
    actions: actions,
})