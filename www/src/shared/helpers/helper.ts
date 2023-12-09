export const chunk = function<T>(a: any[], s: number){
    for(var x, i = 0, c = -1, l = a.length, n = []; i < l; i++)
        (x = i % s) ? n[c][x] = a[i] as T : n[++c] = [a[i] as T];
    return n;
};