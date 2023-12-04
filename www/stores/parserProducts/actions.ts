import { ParserProductsState } from "../types";
import { fetchRequest } from "../primary";

export const actions = {
    async setMenuShow(context: ParserProductsState, page: number = 1){
        const { data, error } = await fetchRequest(`${GlobalVars.sait}api/parser_products`,{
            method: 'GET',
            params: {

            }
        })
    },
}