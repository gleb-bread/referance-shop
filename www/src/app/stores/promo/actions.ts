import { Store } from './state';
import { PromoAddedType, PromoType, PromoOptions } from '../types';
import { getCurrectURL } from '@/shared/helpers/helperAPI';
import { getCurrectData } from '../options';
import axios from 'axios';

export const actions = {
    async addPromo(context: Store, params: PromoAddedType){
        let url = getCurrectURL('api/promo/code');
        let data = getCurrectData(params);
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            let newPromo = response.data as PromoType;

            if(!context.promos){
                context.promos = [];
            }

            context.promos.push(newPromo);

            return true;
        }).catch(response => {
            return false;
        }) 
    },

    async setPromos(context: Store){
        context.observerRequest.setLoading('loading', true);

        let data = getCurrectData({});

        axios.get(getCurrectURL(`api/promo`),{params: data}).then(response => {
            context.promos = response.data;
            context.observerRequest.setLoading('loading', false);
            context.observerRequest.setError('error', false);
        }).catch(responce => {
            context.observerRequest.setLoading('loading', false);
            context.observerRequest.setError('error', false);
        })
    },

    async usePromo(context: Store, code: string){
        let url = getCurrectURL('api/promo');
        let data = getCurrectData({'promo_code': code});
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            return response.data.success;
        }).catch(response => {
            return false;
        })
    },

    async changePromo(context: Store, options: PromoOptions){
        let url = getCurrectURL(`api/promo/${options.promo_id}`);
        let data = getCurrectData(options);
        data = JSON.stringify(data);

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        return await axios.post(url, data, config).then(response => {
            let updatedPromo = response.data as PromoType;
            let promoInStore = context.promos.find(item => item.promo_id === updatedPromo.promo_id);
            if(promoInStore){
                Object.keys(options).forEach((item) => {
                    //@ts-ignore
                    (<PromoType> promoInStore)[item as keyof PromoOptions] = <unknown>options[item];
                });
            }
            return true;
        }).catch(response => {
            return false;
        })

    }

}