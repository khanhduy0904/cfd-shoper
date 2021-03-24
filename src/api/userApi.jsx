import {domain} from "./config";
import Api from "../core/Api";

export default {
    login: (data) => {
        return fetch(`${domain}/elearning/v4/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
    },
    register: (data) => {
        return Api.token().post("/elearning/v4/register", data)
    },
    update: (data) => {
        return  Api.token().post("/update-profile", data)
    },
    //wishlist
    addWithList: (data) => {
        return Api.token().post("/ecommerce/v1/profile/wishlist", data)
    },
    getWithList: (queryString) => {
        return Api.token().get(`/ecommerce/v1/profile/wishlist${queryString ? `?${queryString}` : ""}`)
    },
    removeWishlist: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/wishlist/${_id}`)
    },
    //address
    addAddress: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/address`, data)
    },
    getAddress: (_id) => {
        return Api.token().get(`/ecommerce/v1/profile/address${_id ? `/${_id}` : ""}`)
    },
    removeAddress: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/address/${_id}`)
    },
    changeAddressDefault: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/address-default`, data)
    },
    //payment
    addPayment: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/payment`, data)
    },
    getPayment: (_id) => {
        return Api.token().get(`/ecommerce/v1/profile/payment${_id ? `/${_id}` : ""}`)
    },
    removePayment: (_id) => {
        return Api.token().delete(`/ecommerce/v1/profile/payment/${_id}`)
    },
    changePaymentDefault: (data) => {
        return Api.token().post(`/ecommerce/v1/profile/payment-default`, data)
    },
}