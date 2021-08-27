// import "babel-polyfill";
interface IObj {
    [key: string]: any;
}

export default function encodeUrlParam(a: IObj): string {
    const arr: string[] = [];
    let key = "";
    for (key in a) {
        arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(a[key]));
    }
    return arr.join("&").replace(/%20/g, "+");
}
