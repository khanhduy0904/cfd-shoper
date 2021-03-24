import { call, put, select } from "@redux-saga/core/effects";
import cartApi from "../../api/cartApi";
import { cartAction } from "../reducers/cartReducer";

export function* logoutClearCart(){
    yield put(cartAction.clearCart())
    // put giống với dispatch
}

export function* userLoginGetCart(){
    const state = yield select();
    if(state.cart.num === 0){
        let cart = yield call(cartApi.getCartFromUser)
        yield put(cartAction.setCart(cart.data))
    }else{
        yield call(cartApi.create, state.cart)
    }
   
}

export function* cartUpdate(data){
    //data nhận vào type và payload của action dc gọi tới
    // console.log(data.type);
    // console.log(data.payload);

    const state = yield select();
    //select(saga) lấy ra tất cả các state bên trong redux

    yield call(cartApi.create, state.cart)
    // state.cart là tham số truyền vào cho th create
}