import { getCookie } from "@/shared/helpers/helperCookie";
export const publicPath = 'http://localhost:8888/';

export const getCurrectData = function(params: any){
    return {
        ...params,
        ...{
            user_token: getCookie('user_token'),
        }
    }
}