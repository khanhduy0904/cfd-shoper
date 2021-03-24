import { takeLatest } from 'redux-saga/effects';
import { AUTH } from '../reducers/authReducer';
import { CART } from '../reducers/cartReducer';
import { cartUpdate, logoutClearCart, userLoginGetCart } from './cartSaga';


export default function* saga(){
    yield takeLatest(AUTH.logout, logoutClearCart);
    yield takeLatest(AUTH.login, userLoginGetCart);
    yield takeLatest([CART.addToCart, CART.increment, CART.decrement, CART.remove], cartUpdate);
}


