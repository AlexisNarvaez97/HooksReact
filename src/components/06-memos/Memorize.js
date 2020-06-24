import React, { useState } from 'react'
import '../02-useEffect/effect.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {


    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Counter: <Small value={ state } /> </h1>
            <hr/>


            <button
                className="btn btn-primary mr-3"
                onClick={ increment }
            >
                +1
            </button>

            <pre>
                { JSON.stringify( show, null, 3 ) }
            </pre>

            <button className="btn btn-danger" onClick={ () => setShow( !show )}>
                Show/Hide
            </button>



        </div>
    )
}
