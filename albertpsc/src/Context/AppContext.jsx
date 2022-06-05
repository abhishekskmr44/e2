import React, {useContext, useState, useReducer} from "react";

export const AppContext = React.createContext();

const initState = {
    isAuth: false, 
}
function reducer(state,action) {
    switch(action.type){
        case "LOGIN_SUCCESS" :{
            return {
                ...state,
                isAuth: true, 
                token: action.token
            }
        }
        case "LOGOUT_SUCCESS":{
            return{
                ...state,
                isAuth: false,
                token: null
            }
        }
        case "LOGIN_FAILIURE":{
              return {
                  ...state,
                  isAuth: false,
                  token: null
              }
        }
        default : {
           return state;
        }
    }
}


export default function AppContextProvider({children}) {
   const[isAuth, setIsAuth] = useState(false);

   const [state,dispatch] = useReducer(reducer,initState);
   
    const toggleAuth = () =>{
        setIsAuth(!isAuth)
    }

    return 
 
    <AppContext.Provider value = {[state, dispatch]}>
    {children}
    </AppContext.Provider>
}
