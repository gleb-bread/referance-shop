import { Store } from './state';

export const actions = {
    setAnswerRequest(context: Store, flag: null | boolean){
        context.requestAnswer = flag;
    },

    setTextRequest(context: Store, str: string){
        context.textAnswer = str;
    }

}