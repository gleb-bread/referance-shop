import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { CartState } from './state';


export const useCartStore = defineStore('cart', {
    state: (): CartState => {
        return State;
    },
    getters: getters,
    actions: actions,
})