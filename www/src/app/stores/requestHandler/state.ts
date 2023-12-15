import { ParserProductsType } from "../types";


export interface Store {
    requestAnswer: null | boolean,
    textAnswer: string,
}

export const State: Store = {
    requestAnswer: null,
    textAnswer: '',
}