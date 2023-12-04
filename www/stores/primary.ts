import { GlobalVars } from "./options";
import { useCookie } from "nuxt/app";

export const fetchRequest = async function(url: string, opts: any){
    let mainSait = GlobalVars.sait;
    if(mainSait[mainSait.length - 1] != '/') mainSait = mainSait + '/';
    if(url[url.length - 1] == '/') url = url.substring(0, url.length - 1);

    console.log(`${mainSait}${url}`);

    opts = {...opts, ...{
        query: {
            ...opts.query,
            ...{'user_token': useCookie('user_token')},
        }
    }};

    const { data } = await useFetch(`${mainSait}${url}`, opts);
    return data;
}