import { Store } from "./state";

export const getters = {

    getAnswerRequest(store: Store){
        return store.requestAnswer;
    },

    getTextRequest(store: Store){
        return store.textAnswer;
    }

}