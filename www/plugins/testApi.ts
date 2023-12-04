import { v4 } from "uuid";
import { useCookie } from "nuxt/app";

export default defineNuxtPlugin((app) => {
    // const testApi = async function(){

        
    //     let tokenUser = useCookie('user_token');

    //     let params = {
    //         'id': `12`,
    //     };

    //     const {data, error} = await fetchRequest('api/parser_products', { 
    //         method: 'GET',
    //         query: params,
    //     });

    //     console.log(error.value?.statusCode);

    // }

    // const fetchRequest = async function(url: string, opts: any){
    //     let mainSait = 'http://localhost:8888';
    //     if(mainSait[mainSait.length - 1] != '/') mainSait = mainSait + '/';
    //     if(url[url.length - 1] == '/') url = url.substring(0, url.length - 1);
    
    //     opts = {...opts, ...{
    //         query: {
    //             ...opts.query,
    //             ...{'user_token': useCookie('user_token')},
    //         }
    //     }};
    
    //     const { data, error } = await useFetch(`${mainSait}${url}`, opts);
    //     return {data: data, error: error};
    // }

    // app.vueApp
    //     .use(testApi);
})
