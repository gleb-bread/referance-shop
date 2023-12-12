import { ParserProductsType, ParserProductsFirstJSONParse, ParserProductsFilter } from "../types";
import { getCurrectData } from "../options";
import { ParserProductsState } from './state';
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import axios from "axios";

export const actions = {
    async setParserProducts(context: ParserProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        context.requestObserver.setLoading('loadingProduct', true);

        let data = getCurrectData(params);


        axios.get(getCurrectURL(`api/parser_products`),{params: data}).then(response => {
            let defaultData = getJSONPasrsingObject(response.data as unknown as string);
            context.products = defaultData;
            if(defaultData?.length >= 100){
                context.isLastPage = false;
            } else {
                context.isLastPage = true;
            }
            context.page = 1;
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        }).catch(responce => {
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        })
    },

    async setParsertProductsById(context: ParserProductsState, idProduct: number){
        context.requestObserver.setLoading('loadingProduct', true);
        let data = getCurrectData({});

        axios.get(getCurrectURL(`api/parser_products/${idProduct}`),{params: data}).then(response => {
            let defaultData = getJSONPasrsingObject(response.data as unknown as string);
            context.products = defaultData;
            if(defaultData?.length >= 100){
                context.isLastPage = false;
            } else {
                context.isLastPage = true;
            }
            context.page = 1;
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        }).catch(responce => {
            context.requestObserver.setLoading('loadingProduct', false);
            context.requestObserver.setError('errorProduct', false);
        })
    },  

    async updateParserProducts(context: ParserProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        let data = getCurrectData(params);


        axios.get(getCurrectURL(`api/parser_products`),{params: data}).then(response => {
            let defaultData = getJSONPasrsingObject(response.data as unknown as string);
            context.products = [...context.products, ...defaultData];
            if(defaultData?.length >= 100){
                context.isLastPage = false;
            } else {
                context.isLastPage = true;
            }
            
            if(params.page){
                context.page = <number> params.page;
            }
           
        }).catch(responce => {
            
        })
    },

    async setParserCategories(context: ParserProductsState){
        context.requestObserver.setLoading('loadingCategory', true);

        let data = getCurrectData({});
        
        axios.get(getCurrectURL(`api/parser_products/categories`),{params: data}).then(response => {
            let categories = response.data;
            Object.keys(categories).forEach(key => {
                if(!key){
                    delete categories[key];
                }
            });

            context.categories = categories;
            context.requestObserver.setLoading('loadingCategory', false);
            context.requestObserver.setError('errorCategory', false);
        }).catch(response => {
            context.requestObserver.setLoading('loadingCategory', false);
            context.requestObserver.setError('errorCategory', true);
        }) 
    },

    async setImgOnCategory(context: ParserProductsState){
        let data = getCurrectData({});

        context.requestObserver.setLoading('loadingImg', true);

        axios.get(getCurrectURL(`api/parser_products/images`),{params: data}).then(response => {
            let images = response.data;

            Object.keys(images).forEach((key: string) => {
                if(!key || !images[key]){
                    delete images[key];
                }
            })

            context.imagesForCategory = images; 

            context.requestObserver.setLoading('loadingImg', false);
            context.requestObserver.setLoading('errorImg', false);
        }).catch(responce => {
            context.requestObserver.setLoading('loadingImg', false);
            context.requestObserver.setLoading('errorImg', true);
        })
    },

    setSubcategoryShow(context: ParserProductsState, flag: boolean){
        context.subcategoryShow = flag;
    }
}

function getJSONPasrsingObject(defaultData: unknown){
    let dataWithKeys = defaultData as ParserProductsFirstJSONParse[] | ParserProductsFirstJSONParse;

    if(Array.isArray(defaultData)){
        (<ParserProductsFirstJSONParse[]>dataWithKeys).forEach(element => {
            (<Array<keyof ParserProductsType>>Object.keys(element)).forEach((key) => {
                if(key == 'characteristics' || key == 'images' || key == 'variants'){
                    if(Boolean(element[key])){
                        element[key] = JSON.parse(<string> element[key]);
                    }
                }
            })
        });
    } else {
        (Object.keys(<ParserProductsFirstJSONParse> defaultData)).forEach((key) => {
            if(key == 'characteristics' || key == 'images' || key == 'variants'){
                if(Boolean((<ParserProductsFirstJSONParse> dataWithKeys)[key])){
                    (<ParserProductsFirstJSONParse> dataWithKeys)[key] = JSON.parse(<string>(<ParserProductsFirstJSONParse> dataWithKeys)[key]);
                }
            }
        })
        //@ts-ignore
        dataWithKeys = [<ParserProductsType>dataWithKeys] as ParserProductsType[];
    }



    return dataWithKeys as ParserProductsType[];
}