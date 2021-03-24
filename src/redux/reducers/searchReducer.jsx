import productApi from "../../api/productApi";
import createSlice from "../../core/createSlice";

let initialState = {
    list: [],
    key: "",
}

export const fetchSearch = (keyword) => {
    return (dispatch) => {
        productApi.search(keyword).then(res => {
            dispatch({
                type: TYPE.search,
                payload: res.data
            })
        })
    }
}
let {reducer, action, TYPE} = createSlice({
    name: "search",
    initialState,
    reducers: {
        search: function(state, action){
         
            return {
                ...state,
                list: action.payload,
            }
        }
    }
})

export default reducer;
export {action};
export {TYPE};
