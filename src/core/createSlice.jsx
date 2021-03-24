

// xóa


export default function createSlice({ initialState, reducers, name }) {

    let action = {}
    let TYPE = {}

    for (let i in reducers) {
        let type = `${name}/${i}`


        action[i] = (data) => ({
            type,
            payload: data
        })
        
        TYPE[i] = type
    }
    // console.log(action);

    function reducer(state = initialState, action) {

        let type = action.type.split('/')[1]
        // console.log(action);
        if (type in reducers) {
            return reducers[type](state, action)
        }

        return state;
    }

    return {
        action,
        reducer,
        TYPE
    }

}



// //////////////////////---createSlice------///////////////////////
// export default function createSlice({initalState, reducers, name}) {

//     let action = {};
//     let TYPE = {};

//     for(let i in reducers){
//         let type = `${name}/${i}`

//         action[i] = (data) => ({
//             type,
//             payload: data
//         });

//         TYPE[i] = type;
//     }


//     function reducer(state = initalState, action){
//         let type = action.type.split("/")[1];
//         if(type in reducers){
//             return reducers[type](state,action);
//         }
//         return state;
//     }

//     return {
//         action,
//         reducer,
//         TYPE
//     }

// }
