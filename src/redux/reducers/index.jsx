import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';

const reducers = {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
}
export default reducers;
// export default {
//     auth: authReducer,
//     product: productReducer,
//     cart: cartReducer,
//     search: searchReducer,
// }