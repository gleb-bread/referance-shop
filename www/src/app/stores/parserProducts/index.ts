import { defineStore } from 'pinia';
import { State } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { ParserProductsState } from './state';


export const useParserProductsStore = defineStore('productsParser', {
    state: (): ParserProductsState => {
        return State;
    },
    getters: getters,
    actions: actions,
})