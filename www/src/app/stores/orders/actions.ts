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
    }
};