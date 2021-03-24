// import productApi from "../../api/productApi";
// import createSlice from "../../core/createSlice";
// const initialState = {
//     products: [],
//     paginate: null
// }



// export function getProduct(page) {
//     return (dispatch) => {
//         productApi.catalog(page)
//             .then(res => {

//                 dispatch({ type: TYPE.catalog, payload: res })
//             })
//     }
// }


// let { reducer, action, TYPE } = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         catalog: function (state, action) {
//             return {
//                 ...state,
//                 products: action.payload.data,
//                 paginate: action.payload.paginate
//             }
//         }
//     }
// })

// export default reducer

////////////////////////////////////////////////////////////////


import createSlice from "../../core/createSlice";
import productApi from "../../api/productApi";
import userApi from "../../api/userApi";



const initialState = {
    products: [],
    paginate: null,
    loading: true,
    categories: [],
    loadingCategories: true,
}

export const getProductAction = (queryString) => {
    return (dispatch) => {
        dispatch(action.loading());
        productApi.catalog(queryString).then(res => {
            dispatch(action.catalog(res))
        })
    }
}

export const addWithList = (product) => {
    userApi.addWithList(product)
}


export function getCategories() {

    return async (dispatch, state) => {
        if (state.product.loadingCategories) {
            let res = await productApi.category();
            dispatch(action.categories(res))
            console.log(res);
        }
    }
}


let { reducer, action, TYPE } = createSlice({
    name: "product",
    initialState,
    reducers: {
        loading: function (state, action) {
            return {
                ...state,
                loading: true
            }
        },
        catalog: function (state, action) {
            return {
                ...state,
                loading: false,
                products: action.payload.data,
                paginate: action.payload.paginate,
            }
        },
        categories: function (state, action) {
            return {
                ...state,
                categories: action.payload,
                loadingCategories: false,
            }
        }
    }
})

export default reducer;
export const PRODUCT = TYPE
export const productAction = action