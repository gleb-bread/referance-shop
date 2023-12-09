import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { MenuState } from './state';


export const useMenuStore = defineStore('menu', {
    state: (): MenuState => {
        return State;
    },
    getters: getters,
    actions: actions,
})