// import userApi from "../../api/userApi"
// import createSlice from "../../core/createSlice"


// let user = JSON.parse(localStorage.getItem('login'))

// let initialState = {
//     login: !!user,
//     user: user,
//     error: null
// }


// export function login(data) {
//     return (dispatch) => {
//         userApi.login(data)
//             .then(res => {
//                 if (res.error) {
//                     dispatch({ type: TYPE.error, payload: res.error })
//                 } else {
//                     dispatch({ type: TYPE.login, payload: res.data })
//                 }
//             })


//     }
// }

// let { action, reducer, TYPE } = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login: function (state, action) {
//             let user = action.payload
//             let token = action.payload.token;


//             localStorage.setItem('login', JSON.stringify(user))
//             localStorage.setItem('token', JSON.stringify(token))
//             return {
//                 ...state,
//                 login: true,
//                 user
//             }
//         },
//         logout: function (state, action) {
//             localStorage.removeItem('login')
//             localStorage.removeItem('token')
//             return {
//                 ...state,
//                 login: false,
//                 user: null
//             }
//         },
//         error: function (state, action) {
//             return {
//                 ...state,
//                 error: action.payload
//             }
//         }

//     }
// })


// export default reducer

// export const userLogin = action.login

// export const userLogout = action.logout

// export const USER = TYPE



///////////////////////////////////////////////////////////////////////////////////////////////

// let userLocalStorage = JSON.parse(localStorage.getItem("login"));

// const initialState = {
//     login: !!userLocalStorage,
//     user: userLocalStorage,
// }

// const USER = {
//     LOGIN: "USER_LOGIN",
//     LOGOUT: "USER_LOGOUT"
// }

// export const userLogin = () => {
//     return {
//         type: USER.LOGIN
//     }
// }

// export const userLogout = () => {
//     return {
//         type: USER.LOGOUT
//     }
// }


// export default function authReducer(state = initialState, action) {

//     switch (action.type) {
//         case USER.LOGIN:
//             let userLogin = {
//                 name: "Nguyễn Khánh Duy",
//                 email: "khanhduy090499@gmail.com"
//             }
//             localStorage.setItem("login",JSON.stringify(userLogin))
//             return {
//                 ...state,
//                 login: true,
//                 userLogin
//             }
//         case USER.LOGOUT:
//             localStorage.removeItem("login");
//             return {
//                 ...state,
//                 login: false,
//                 user: null
//             }

//         default:
//             return state;
//     }


//     return state;

// }



/////////////////////////////////////////////////////////////////////////
////////////////////////////   CREATESLICE   //////////////////////////////////


import createSlice from "../../core/createSlice";
import userApi from "../../api/userApi";

let userLocalStorage = JSON.parse(localStorage.getItem("loginUser"));

const initialState = {
    login: !!userLocalStorage,
    user: userLocalStorage,
    error: null
}

export const loginAction = (data) => {
    return (dispatch) => {
        userApi.login(data).then(res => {
            // console.log(res);
            if(res.error){
                dispatch({type: TYPE.error, payload: res.error})
            }else{
                dispatch({type: TYPE.login, payload: res.data})
            }
            
        })
    }
};
export const registerAction = (data) => {
    return (dispatch) => {
        userApi.register(data).then(res => {
            // console.log(res);
            if(res.error){
                dispatch(action.error(res.error))
            }else{
                dispatch(action.register(res.data))
            }
            
        })
    }
}

export const updateInfoAction = (data) => {
    return (dispatch) => {
        userApi.update(data).then(res => {
            if(res.error){
                dispatch(action.error(res.error))
            }else{
                dispatch(action.updateUser(res.data))
            }
        })
    }
}

let {action, reducer, TYPE} =  createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: function(state,action){
            let user = action.payload;
            let token = action.payload.token;
            localStorage.setItem("loginUser",JSON.stringify(user));
            localStorage.setItem("token",JSON.stringify(token));
            return {
                ...state,
                login: true,
                user
            }
        },
        logout: function(state,action){
            localStorage.removeItem("loginUser");
            localStorage.removeItem("token");
            return {
                ...state,
                login: false,
                user: null
            }
        },
        error: function(state,action){
            return {
                ...state,
                error: action.payload,
            }
        },
        update: function(state, action){
            let user = {
                ...state.user,
                // name: action.payload.name,
                ...action.payload
            };
            localStorage.setItem("loginUser",JSON.stringify(user));
            return {
                ...state,
                user
            }
        },
        register: function(state, action){
            let user = action.payload;
            let token = action.payload.token;
            localStorage.setItem("loginUser",JSON.stringify(user));
            localStorage.setItem("token",JSON.stringify(token));
            return {
                ...state,
                login: true,
                user
            }
        },
        updateUser: function(state, action){
            let user = {
                ...state.user,
                ...action.payload
            };
            localStorage.setItem("loginUser",JSON.stringify(user));
            return{
                ...state,
                user
            }
        }
    }

})

export default reducer;
export const userLogin = action.login;
export const userLogout = action.logout;
export const userUpdate = action.update;
export const AUTH = TYPE;
export const AuthAction = action;