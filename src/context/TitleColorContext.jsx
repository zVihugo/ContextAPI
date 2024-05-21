// eslint-disable-next-line no-unused-vars
import {createContext, useReducer } from 'react'


//Exportando contexto
export const TitleColorContext = createContext();

//Criando o titleColorReducer 
export const titleColorReducer = (state, action) => {
    //switch para verificar a ação
    switch(action.type){
        case "RED":
            return {...state, color: "red"};
        case "GREEN":
            return {...state, color: "green"};
        case "BLUE":
            return {...state, color: "blue"};
        default:
            return state;
    }
}

//Criando provider
// eslint-disable-next-line react/prop-types
export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});
    console.log(state);
    
    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}