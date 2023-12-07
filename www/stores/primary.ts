import { GlobalVars } from "./options";
import { useCookie } from "nuxt/app";

export const fetchRequest = async function(url: string, opts: any){
    const token =  useCookie('user_token');

    console.log();

    let mainSait = GlobalVars.sait;
    if(mainSait[mainSait.length - 1] != '/') mainSait = mainSait + '/';
    if(url[url.length - 1] == '/') url = url.substring(0, url.length - 1);

    opts = {...opts, ...{
        query: {
            ...opts.query,
            ...{'user_token': token},
        }
    }};

    const { data, error }  = await useFetch(`${mainSait}${url}`, opts);
    
    return data;
}