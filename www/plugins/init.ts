import { v4 } from "uuid";
import { useCookie } from "nuxt/app";

export default defineNuxtPlugin((app) => {
    const init = async function(){

        
        let tokenUser = useCookie('user_token');

        let data = {
            'user_token': tokenUser.value || v4(),
        };


        let result = await $fetch('http://localhost:8888//api/users', { 
            method: 'GET',
            query: data,
            
        });

        if(result){
            tokenUser.value = tokenUser.value ? tokenUser.value : data.user_token;
        }

    }

    app.vueApp
        .use(init);
})

