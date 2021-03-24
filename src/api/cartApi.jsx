import Api from "../core/Api";

const cartApi = {
     
    update: (data) => {
        return Api.token().put(`/ecommerce/v1/cart`, data)
    },
    applyCode: (code) => {
        return new Promise((resolve, reject) => {
            resolve({ success: true })
        })
    },
    create: (data) => {
        return Api.token().post(`/ecommerce/v1/cart`, data)
    },
    getCartFromUser: () => {
        return Api.token().get('/ecommerce/v1/cart')
    },
    order: (data) => {
        return Api.token().post('/ecommerce/v1/order', data)
    },
    getOrder: (_id) => {
        return Api.token().get(`/ecommerce/v1/order/${_id}`)
    },
    getAllOrder() {
        return Api.token().get('/ecommerce/v1/order')
    }
}

export default cartApi;
