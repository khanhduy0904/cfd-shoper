
export const convertQueryToObject = () => {
    var search = '' || window.location.search.substring(1);
    return !search ? {} : JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export const serializeObjtoURL = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

export default {
    currency(number) {
        return new Intl.NumberFormat('vn').format(number) + ' VND'
    }
}
