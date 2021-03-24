// import createSlice from '../../core/createSlice'

// let cart = JSON.parse(localStorage.getItem('cart'))

// const initialState = {
//     list: cart?.list || [],
//     num: cart?.num || 0,
//     amount: cart?.amount || 0,
//     shipping_option: cart?.shipping_option || 'free',
//     shipping_price: cart?.shipping_price || 0,
// }

// function returnCart(cart) {
//     localStorage.setItem('cart', JSON.stringify(cart))
//     return cart
// }


// let { reducer, action, TYPE } = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addCart: function (state, action) {
//             let { list, amount } = state

//             let f = list.findIndex(e => e._id === action.payload._id)

//             if (f !== -1) {
//                 list[f].cartNum++

//                 amount += list[f].real_price

//             } else {
//                 let item = JSON.parse(JSON.stringify(action.payload))

//                 item.cartNum = 1
//                 list.push(item)

//                 amount += item.real_price
//             }



//             return returnCart({
//                 ...state,
//                 num: state.num + 1,
//                 list,
//                 amount
//             })
//         },
//         remove: function (state, action) {
//             let { list, amount } = state

//             let f = list.findIndex(e => e._id === action.payload)
//             if (f !== -1) {
//                 amount -= list[f].real_price * list[f].cartNum
//                 list.splice(f, 1)
//             }

//             return returnCart({
//                 ...state,
//                 num: state.num - 1,
//                 list,
//                 amount
//             })

//         },
//         increment: function (state, action) {
//             let { list, amount } = state

//             let f = list.findIndex(e => e._id === action.payload)
//             if (f !== -1) {
//                 list[f].cartNum++
//                 amount += list[f].real_price
//             }

//             return returnCart({
//                 ...state,
//                 num: state.num + 1,
//                 list,
//                 amount
//             })
//         },
//         descrement: function (state, action) {
//             let { list, amount } = state

//             let f = list.findIndex(e => e._id === action.payload)
//             if (f !== -1) {
//                 amount -= list[f].real_price
//                 if (list[f].cartNum > 1) {
//                     list[f].cartNum--
//                 } else {
//                     list.splice(f, 1)
//                 }


//             }

//             return returnCart({
//                 ...state,
//                 num: state.num - 1,
//                 list,
//                 amount
//             })
//         },

//         shippingChange: function (state, action) {

//             let { shipping_option, shipping_price } = action.payload

//             return returnCart({
//                 ...state,
//                 shipping_option,
//                 shipping_price
//             })
//         }
//     }
// })

// export default reducer

// export const addCart = action.addCart

// export const removeItemCart = action.remove

// export const cartIncrement = action.increment

// export const cartDerement = action.descrement

// export const shippingChange = action.shippingChange

/////////////////////////////////////////////////

import createSlice from "../../core/createSlice";
let cart = JSON.parse(localStorage.getItem("cartLocal"));

let initialState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    tax: cart?.tax || 10,
    amount: cart?.amount || 0,
    shipping_option: cart?.shipping_option || 'free',
    shipping_price: cart?.shipping_price || 0,
    payment_option: cart?.payment_option || "paypal"
}

let returnCart = (cart) => {
    localStorage.setItem("cartLocal", JSON.stringify(cart));
    return cart;
}
let calPrice = (list) => {
    let amount = list.reduce((sum, currentItem) => sum + currentItem.real_price * currentItem.cartNum , 0)
    let num = list.reduce((sum, currentItem) => sum + currentItem.cartNum, 0)


    return {
        amount,
        num
    }
}

let { reducer, action, TYPE} = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: function (state, action) {
            let { list, amount } = state;
            let index = list.findIndex(item => item._id === action.payload._id);

            let cartNum = action.payload.cartNum || 1;
            if (index !== -1) {
                list[index].cartNum += cartNum;
                amount += list[index].real_price;
            } else {
                let item = JSON.parse(JSON.stringify(action.payload));
                item.cartNum = cartNum;
                list.push(item);
                amount += item.real_price;
            }
            return returnCart({
                ...state,
                ...calPrice(list),
                list,
                // num: state.num + cartNum,
            
                // amount
            })
        },
        remove: function (state, action) {
            let { list, amount, num } = state;
            let index = list.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                amount -= list[index].real_price * list[index].cartNum;
                num -= list[index].cartNum;
                list.splice(index, 1);

            }
            return returnCart({
                ...state,
                ...calPrice(list),
                list,
            })
        },
        increment: function (state, action) {
            let { list, amount } = state;
            let index = list.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                list[index].cartNum++;
                amount += list[index].real_price;
            }
            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount
            })
        },
        decrement: function (state, action) {
            let { list, amount } = state;
            let index = list.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                amount -= list[index].real_price;
                if (list[index].cartNum > 1) {
                    list[index].cartNum--;
                } else {
                    list.splice(index, 1);
                }

            }
            return returnCart({
                ...state,
                ...calPrice(list),
                // num: state.num - 1,
                list,
                // amount
            })
        },
        cartUpdate: function (state, action){
            return returnCart({
                ...state,
                ...action.payload
            })
        },
        shippingChange: function (state, action) {

            let { shipping_option, shipping_price } = action.payload

            return returnCart({
                ...state,
                shipping_option,
                shipping_price
            })
        },
        paymentChange: function (state, action) {

            let { payment_option } = action.payload

            return returnCart({
                ...state,
                payment_option,
            })
        },
        clearCart: function (state, action) {
            return returnCart({
                list: [],
                num: 0,
                amount: 0,
                tax: 10,
                shipping_option: 'free',
                shipping_price: 0,
                payment_option: 'paypal',
                error: ''
            })
        },
        setCart: function (state, action) {
            return returnCart(action.payload)
        },
    }

})

export default reducer;
export const addToCart = action.addToCart;
export const removeItemCart = action.remove;
export const cartIncrement = action.increment;
export const cartDecrement = action.decrement;
export const cartUpdate = action.cartUpdate;
export const cartAction = action;
export const CART = TYPE;
