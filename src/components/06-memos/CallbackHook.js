import React, { useState, useCallback } from 'react';
import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    // Funcion memorizada.
    const increment = useCallback( (num) => {
        setCounter( c => c + num);
    }, [setCounter])

    return (
        <div>
            <h1>UseCallHook: { counter } </h1>
            <hr/>

            <ShowIncrement increment={ increment } />

        </div>
    )
}
