import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { Store } from './state';


export const usePromoStore = defineStore('promo', {
    state: (): Store => {
        return State;
    },
    getters: getters,
    actions: actions,
})