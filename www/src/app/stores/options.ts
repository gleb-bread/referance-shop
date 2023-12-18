import { getCookie } from "@/shared/helpers/helperCookie";
export const publicPath = 'http://glebhe0h.beget.tech/';

export const getCurrectData = function(params: any){
    return {
        ...params,
        ...{
            user_token: getCookie('user_token'),
        }
    }
}