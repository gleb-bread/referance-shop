export const chunk = function<T>(a: any[], s: number){
    for(var x, i = 0, c = -1, l = a.length, n = []; i < l; i++)
        (x = i % s) ? n[c][x] = a[i] as T : n[++c] = [a[i] as T];
    return n;
};

export const getLinkWithGetParams = function(path: string,params: {[key: string]: string}){
    let link = path;

    let getParams = new URLSearchParams(window.location.search);
    Object.keys(params).forEach(key => {
        getParams.append(key, encodeURI(params[key]))
    });

    return link + '?' + getParams.toString();

}

export const convertMoneyType = function(value: string){
    value = (value && value != 'null' && value != 'undefined') ? value + '₽' : '';
    value = value.replace(/ /g, '');
    return (value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };
  
  export const convertMoneyTypeWithoutRuble = function(value: string){
    value = (value && value != 'null' && value != 'undefined') ? value : '';
    value = value.replace(/ /g, '');
    return (value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };