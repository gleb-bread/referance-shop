import { CartState } from './state';
import { CartProductItem, CartProductFilter, CartAddType } from '../types';
import { getCurrectData } from "../options";
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import axios from "axios";


export const actions = {
    async setProducts(context: CartState, params: CartProductFilter){
        context.ObserverRequest.setLoading('loading', true);

        let data = getCurrectData(params);

        await axios.get(getCurrectURL(`api/cart`),{params: data}).then(response => {
            let defaultData = response.data as unknown as CartProductItem[];
            context.products = defaultData;
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

            context.products.push(product);            

            return true;
        }).catch(response => {
            return false;
        })
    }
};