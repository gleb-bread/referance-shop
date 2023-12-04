export class ObserverRequest<T> {
    loadingFlags: {[key in keyof T]: boolean};
    errorFlags: {[key in keyof T]: boolean};

    constructor(){
        this.loadingFlags = {} as {[key in keyof T]: boolean};
        this.errorFlags = {} as {[key in keyof T]: boolean};
    }

    setLoading(key: keyof T, flag: boolean){
        this.loadingFlags[key] = flag;
    }

    setError(key: keyof T, flag: boolean){
        this.errorFlags[key] = flag;
    }

    getLoadingFlag(key: keyof T){
        return this.loadingFlags[key];
    }

    getErrorFlag(key: keyof T){
        return this.errorFlags[key];
    }

    getFullErrors(){
        return this.errorFlags;
    }

    getFullLoading(){
        return this.loadingFlags;
    }

    getMixLoading(...args: Array<keyof T>){
        let result = false;

        args.forEach(key => {
            result = result || this.getLoadingFlag(key);
        });

        return result;
    }

    getMixError(...args: Array<keyof T>){
        let result = false;

        args.forEach(key => {
            result = result || this.getErrorFlag(key);
        });

        return result;
    }
}

