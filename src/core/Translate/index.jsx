// import React, { useContext, useState } from "react";

// let Context = React.createContext({});

// let initState = {
//     default: "en"
// }

// export default function TranslateProvider({children}){

//     let [state, setState] = useState(initState);

//     const translateLanguage = (initTranslate) => {
//         let {default: languageDefault} = initTranslate;
//         if(languageDefault){
//             localStorage.setItem("language",languageDefault)
//         }
//         setState({
//             ...state,
//             ...initTranslate
//         })
//     }   
//     const t = () => {

//     }

//     let value = {t};
//     return <Context.Provider value={value}>{children}</Context.Provider>
// }

// export function useTranslate(){
//     return useContext(Context);
// }

// export function setTranslate(initTranslate){
//     initState = {
//         ...initState,
//         ...initTranslate
//     }
// }