import { v4 } from "uuid";
import { useCookie } from "nuxt/app";

export default defineNuxtPlugin((app) => {
    const testApi = async function(){

        
        let tokenUser = useCookie('user_token');

        let params = {
            'user_token': tokenUser,
        };


        const {data, status} = await useLazyFetch('http://localhost:8888//api/parser_products', { 
            method: 'GET',
            query: params,
        });

        console.log(data.value);

    }

    app.vueApp
        .use(testApi);
})
