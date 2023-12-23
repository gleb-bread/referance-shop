import { getCookie } from "@/shared/helpers/helperCookie";
export const publicPath = 'https://copyrain.ru/';

export const getCurrectData = function(params: any){
    return {
        ...params,
        ...{
            user_token: getCookie('user_token'),
        }
    }
}