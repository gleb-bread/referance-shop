import { publicPath } from "@/app/stores/options";



export const getCorrectURL = function(localPath: string) {
    let path = publicPath[publicPath.length] === '/' ? publicPath : publicPath + '/';
    let local = localPath;
    if(local[0] === '/'){
        local = local.slice(1, local.length);
    }

    if(local[local.length - 1] === '/'){
        local = local.slice(0, local.length - 1);
    }

    return `${path}${local}`;
}

export const getCorrectParams = function(){

}