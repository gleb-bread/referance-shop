import { ParserProductsType, ParserProductsFirstJSONParse, ParserProductsFilter, ProductAddType } from "../types";
import { getCurrectData } from "../options";
import { ProductsState } from './state';
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import axios from "axios";

export const actions = {
    async setParserProducts(context: ProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        context.requestObserver.setLoading('loadingProduct', true);

        let data = getCurrectData(params);


        axios.get(getCurrectURL(`api/products`),{params: data}).then(response => {
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

    async setParsertProductsById(context: ProductsState, idProduct: number){
        context.requestObserver.setLoading('loadingProduct', true);
        let data = getCurrectData({});

        axios.get(getCurrectURL(`api/products/${idProduct}`),{params: data}).then(response => {
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

    async updateParserProducts(context: ProductsState, params:ParserProductsFilter = {page: 1} as ParserProductsFilter){
        let data = getCurrectData(params);


        axios.get(getCurrectURL(`api/products`),{params: data}).then(response => {
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

    async setParserCategories(context: ProductsState){
        context.requestObserver.setLoading('loadingCategory', true);

        let data = getCurrectData({});
        
        axios.get(getCurrectURL(`api/products/categories`),{params: data}).then(response => {
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

    async setImgOnCategory(context: ProductsState){
        let data = getCurrectData({});

        context.requestObserver.setLoading('loadingImg', true);

        axios.get(getCurrectURL(`api/products/images`),{params: data}).then(response => {
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

    async addProducts(context: ProductsState, params: ProductAddType){
        let url = getCurrectURL('api/products');
        let data = getCurrectData(params);
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            let newOrder = response.data as ParserProductsType;

            if(!context.products){
                context.products = [];
            }

            let data = newOrder;

            context.products.push(data);

            return true;
        }).catch(response => {
            return false;
        }) 
    },

    setSubcategoryShow(context: ProductsState, flag: boolean){
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