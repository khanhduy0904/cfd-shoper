// import {domain} from "../api/config";

// class Api{

//     accessToken
//     useToken = false;

//     token(){
//         this.useToken = true;
//         return this;
//     }

//     setupHeaders(){
//         let headers = {
//             'Content-Type': 'application/json'
//         }
//         if(this.useToken){
//             let token = JSON.parse(localStorage.getItem("token"))
//             if(token?.accessToken){
//                 headers.Authorization = `Bearer ${token.accessToken}`
//             }
//         }
//         this.useToken = false;
//         return headers;
//     }

//     get(url){
//         let headers = this._setupHeader()
//         return fetch(`${domain}${url}`,{headers}).then(res => res.json());
//     }
//     post(url, data= {}){
//         let headers = this._setupHeader()
//         let body = JSON.stringify(data);
//         return fetch(`${domain}${url}`,{method: "POST", headers, body}).then(res => res.json());
//     }
//     put(url, data= {}){
//         let headers = this._setupHeader()
//         let body = JSON.stringify(data);
//         return fetch(`${domain}${url}`,{method: "PUT", headers, body}).then(res => res.json());
//     }
//     delete(url){
//         let headers = this._setupHeader()
//         return fetch(`${domain}${url}`,{headers}).then(res => res.json());
//     }
// }


// export default new Api;



import { domain } from '../api/config'

class Api {

    acessToken

    useToken = false

    token() {
        this.useToken = true;
        return this;
    }

    json(res) {
        if (res.status === 200) {
            return res.json()
        }

        return new Promise((resolve, reject) => { })
    }

    _setupHeader() {
        let headers = {
            'Content-Type': 'application/json'
        }

        if (this.useToken) {
            let token = JSON.parse(localStorage.getItem('token'))

            if (token?.accessToken) {
                headers.Authorization = `Bearer ${token.accessToken}`
            }

        }

        this.useToken = false
        return headers
    }

    get(url) {
        let headers = this._setupHeader()
        return fetch(`${domain}${url}`, { headers }).then(this.json)
    }
    post(url, data = {}) {
        let headers = this._setupHeader()

        let body = JSON.stringify(data)

        return fetch(`${domain}${url}`, { method: 'POST', headers, body }).then(this.json)
    }
    put(url, data = {}) {
        let headers = this._setupHeader()

        let body = JSON.stringify(data)
        return fetch(`${domain}${url}`, { method: 'PUT', headers, body }).then(this.json)
    }
    delete(url) {
        let headers = this._setupHeader()
        return fetch(`${domain}${url}`, { method: 'DELETE', headers }).then(this.json)
    }

}

export default new Api();