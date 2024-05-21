// import {useContext} from 'react'

// import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../context/ChangeCounter';


//Refatorando com hook

import {useCounterContext} from '../hooks/useCounterContext'
//eslint-disable-next-line no-unused-vars
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {

//   const {counter} = useContext(CounterContext);  //Antes da refatoração
    const {counter } = useCounterContext(); //Depois da refatoração

    //Contexto mais complexo
    const {color, dispatch} = useTitleColorContext();

    //Alterando o state complexo

    const setTitleColor = (color) => {
        dispatch({type: color})
    };

    return (
        <div>
            <h1 style={{color: color}}>Home</h1>
            <p>Valor do contador: {counter} </p>
            {/* Alterando o valor do contexto */}
            <ChangeCounter />  
            {/* Alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")} >Vermelho</button>
                <button onClick={() => setTitleColor("GREEN")} >Verde</button>
                <button onClick={() => setTitleColor("BLUE")} >Azul</button>
            </div>

        </div>
    )
}

export default Home