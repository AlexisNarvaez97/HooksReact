import React, { useState, useMemo } from 'react'
import '../02-useEffect/effect.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {


    const { state, increment } = useCounter(1000);
    const [show, setShow] = useState(false);

    const memoProcesoPesado = useMemo(() => procesoPesado( state ), [ state ])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small> { state } </small> </h3>
            <hr/>

            <p> { memoProcesoPesado } </p>


            <button
                className="btn btn-primary mr-3"
                onClick={ increment }
            >
                +1
            </button>

            <pre className="mt-5">
                { JSON.stringify( show, null, 3 ) }
            </pre>

            <button className="btn btn-danger" onClick={ () => setShow( !show )}>
                Show/Hide
            </button>



        </div>
    )
}
