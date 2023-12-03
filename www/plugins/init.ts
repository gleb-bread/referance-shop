import { v4 } from "uuid";
import { useCookie } from "nuxt/app";

export default defineNuxtPlugin((app) => {
    const init = async function(){

        
        let tokenUser = useCookie('user_token');

        let params = {
            'user_token': tokenUser.value || v4(),
        };


        const {data, status} = await useLazyFetch('http://localhost:8888//api/users', { 
            method: 'GET',
            query: params,
        });

        if(status.value != 'error'){
            tokenUser.value = tokenUser.value ? tokenUser.value : params.user_token;
        }

    }

    app.vueApp
        .use(init);
})

