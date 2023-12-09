import * as HelperCookie from './../helpers/helperCookie';
import { getCurrectURL } from '../helpers/helperAPI';
import { setCookie } from './../helpers/helperCookie';
import axios from 'axios';
import { v4 } from 'uuid';

export async function init(){
    let userToken = HelperCookie.getCookie('user_token');
    let url = getCurrectURL('api/users');

    if(!userToken){
        userToken = v4();
        setCookie('user_token', userToken, {
            maxAge: 60 * 60 * 24 * 365,
            httpOnly: true,
        })
    }
    
    let data = {
        params: {user_token: userToken},
        config: {
            'Content-Type': 'application/json',
        }
    }

    let result = await axios.get(url, data);
}