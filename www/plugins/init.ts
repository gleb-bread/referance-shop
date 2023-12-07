import { v4 } from "uuid";
import { useCookie } from "nuxt/app";
import { GlobalVars } from "~/stores/options";

export default defineNuxtPlugin((app) => {
    const init = async function(){
        let tokenUser = useCookie('user_token', {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production' ? true : false,
            maxAge: 360000,
        });

        let params = {
            'user_token': tokenUser.value || v4(),
        };


        const data = await fetchRequest('api/users', { 
            method: 'GET',
            query: params,
        });

        if(data.value){
            tokenUser.value = tokenUser.value ? tokenUser.value : params.user_token;
        }

        console.log(tokenUser.value);

    };

    const fetchRequest = async function(url: string, opts: any){
    
        let mainSait = GlobalVars.sait;
        if(mainSait[mainSait.length - 1] != '/') mainSait = mainSait + '/';
        if(url[url.length - 1] == '/') url = url.substring(0, url.length - 1);
    
        opts = {...opts, ...{
            query: {
                ...opts.query,
            }
        }};
    
        const { data, error }  = await useFetch(`${mainSait}${url}`, opts);
        
        return data;
    }

    app.vueApp
        .use(init);
})

