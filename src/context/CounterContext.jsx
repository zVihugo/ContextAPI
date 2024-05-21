//Importando da lib do react

import {createContext, useState} from 'react'

export const CounterContext = createContext();


//Criando provider

// eslint-disable-next-line react/prop-types
export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(5);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )


}