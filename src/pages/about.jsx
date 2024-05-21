// import {useContext} from 'react'

// import {CounterContext} from '../context/CounterContext'

//Importando o hook 

import {useCounterContext} from '../hooks/useCounterContext'
//eslint-disable-next-line no-unused-vars
import { useTitleColorContext } from '../hooks/useTitleColorContext';


const About = () => {
    // const {counter } = useContext(CounterContext); - Antes da refatoração
    const {counter} = useCounterContext(); //Depois da refatoração

    //Utilizando o contexto mais complexo
    const {color, dispatch} = useTitleColorContext();

    //Alterando o state
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

    return (
        <div>
            <h1 style={{color: color}}>About</h1>
            <p>Valor do contexto: {counter}</p>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("GREEN")}>Verde</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}

export default About