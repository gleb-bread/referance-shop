import { ParserProductsState, ParserProductsType, ParserProductsFirstJSONParse } from "../types";
import { fetchRequest } from "../primary";

export const actions = {
    async setParserProducts(context: ParserProductsState, page: number = 1){
        const data = await fetchRequest(`api/parser_products`,{
            method: 'GET',
            query: {
                page: page,
            }
        });

        if(data.value){
            let defaultData = getJSONPasrsingObject(data.value as unknown as string);
            context.products = defaultData;
        } 
    },
}

function getJSONPasrsingObject(defaultData: string){
    let dataWithKeys = JSON.parse(defaultData) as ParserProductsFirstJSONParse[];
    dataWithKeys.forEach(element => {
        (<Array<keyof ParserProductsType>>Object.keys(element)).forEach((key) => {
            if(key == 'characteristics' || key == 'images' || key == 'variants'){
                if(Boolean(element[key])){
                    element[key] = JSON.parse(<string> element[key]);
                }
            }
        })
    });
    return dataWithKeys as ParserProductsType[];
}