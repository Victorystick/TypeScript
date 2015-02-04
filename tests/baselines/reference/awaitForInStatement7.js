//// [awaitForInStatement7.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: any;
declare var o: { i: any };
declare var p: Promise<any>;
async function func(): Promise<void> {
    "before";
    for (o.i in a) {
        "body";
    }
    "after";
}

//// [awaitForInStatement7.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            "before";
            for (o.i in a) {
                "body";
            }
            "after";
            return [2 /*return*/];
        })));
    });
}