import { OrdersState } from './state';
import { OrderType } from '../types';
import { getCurrectData } from "../options";
import { getCurrectURL } from "@/shared/helpers/helperAPI";
import { useCartStore } from '../cart';
import axios from "axios";


export const actions = {
    async addOrder(context: OrdersState, params: {order_discount?: number}){
        let url = getCurrectURL('api/orders');
        let data = getCurrectData(params);
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            let newOrder = response.data as OrderType;
            let CartStore = useCartStore();

            if(!context.orders){
                context.orders = [];
            }

            let data = newOrder;

            context.orders.push(data);
            CartStore.setCountCart(CartStore);
            CartStore.setProducts(CartStore, {page: 1});

            return true;
        }).catch(response => {
            return false;
        }) 
    },

    async setOrders(context: OrdersState, params: any = {page: 1}){
        context.ObserverRequest.setLoading('loading', true);

        let data = getCurrectData(params);

        await axios.get(getCurrectURL(`api/orders`),{params: data}).then(response => {
            let defaultData = Object.values(response.data) as unknown as OrderType[];

            context.orders = defaultData;
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
};