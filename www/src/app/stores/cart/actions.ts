import { CartState } from './state';
import { CartProductItem, CartProductFilter, CartAddType, ParserProductsFirstJSONParse, ParserProductsType } from '../types';
import { getCurrectData } from "../options";
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import axios from "axios";


export const actions = {
    async setProducts(context: CartState, params: CartProductFilter){
        context.ObserverRequest.setLoading('loading', true);

        let data = getCurrectData(params);

        await axios.get(getCurrectURL(`api/cart`),{params: data}).then(response => {
            let defaultData = Object.values(response.data) as unknown as CartProductItem[];
            let data = getJSONPasrsingObject(defaultData) as CartProductItem[];
            context.products = data;
            if(defaultData?.length >= 100){
                context.isLastPage = false;
            } else {
                context.isLastPage = true;
            }
            context.page = 1;
            context.ObserverRequest.setLoading('loading', false);
            context.ObserverRequest.setError('errorLoading', false);
        }).catch(responce => {
            context.ObserverRequest.setLoading('loading', false);
            context.ObserverRequest.setError('errorLoading', false);
        })
    },

    async addProductToCart(context: CartState, params: CartAddType){
        let url = getCurrectURL('api/cart');
        let data = getCurrectData(params);
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            let product = response.data as CartProductItem;

            if(!context.products){
                context.products = [];
            }

            let data = getJSONPasrsingElem(product) as CartProductItem;
            let checkElem = context.products.find(item => item.id === data.id);

            if(checkElem){
                checkElem.count_cart = data.count_cart;
            } else {
                context.products.push(data);
            }       

            this.setCountCart(context);

            return true;
        }).catch(response => {
            return false;
        })
    },

    async setCountCart(context: CartState){
        let url = getCurrectURL('api/cart/count');
        let data = getCurrectData({});

        data = {
            params: data
        }

        return await axios.get(url, data).then(response => {
            let count = response.data as number;

            context.countCart = count;  

        }).catch(response => {

        })
    },

    async changeCount(context: CartState, params: {cart_count: number, cart_id: number}){
        let url = getCurrectURL(`api/cart/${params.cart_id}`);
        let data = getCurrectData(params);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.patch(url, data, config).then(response => {
            let product = response.data as CartProductItem;

                if(!context.products){
                    context.products = [];
                }

                let data = getJSONPasrsingElem(product) as CartProductItem;
                let checkElem = context.products.find(item => item.id === data.id);

                if(checkElem){
                    checkElem.count_cart = data.count_cart;
                    if(!checkElem.count_cart){
                        let indexElem = context.products.indexOf(checkElem);
                        context.products.splice(indexElem, 1);
                    }
                } else {
                    context.products.push(data);
                }       

                this.setCountCart(context);

                return true;
            }).catch(response => {
                return false;
            })
    }
};

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


    return dataWithKeys as CartProductItem[];
}



function getJSONPasrsingElem(defaultData: unknown){
    let dataWithKeys = defaultData as ParserProductsFirstJSONParse;
    (Object.keys(<ParserProductsFirstJSONParse> defaultData)).forEach((key) => {
        if(key == 'characteristics' || key == 'images' || key == 'variants'){
            if(Boolean((<ParserProductsFirstJSONParse> dataWithKeys)[key])){
                (<ParserProductsFirstJSONParse> dataWithKeys)[key] = JSON.parse(<string>(<ParserProductsFirstJSONParse> dataWithKeys)[key]);
            }
        }
    })
    //@ts-ignore
    dataWithKeys = <ParserProductsType>dataWithKeys as ParserProductsType;

    return dataWithKeys as CartProductItem;
}