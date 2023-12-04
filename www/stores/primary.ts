import { GlobalVars } from "./options";
import { UseFetchOptions } from "nuxt/app";

export const fetchRequest = async function(url: string, opts?: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>){
    let mainSait = GlobalVars.sait;
    if(mainSait[mainSait.length - 1] != '/') mainSait = mainSait + '/';
    if(url[url.length - 1] == '/') url = url.substring(0, url.length - 1);

    const { data, error } = await useFetch(`${GlobalVars.sait}${url}`, opts);
    return {data: data, error: error};
}