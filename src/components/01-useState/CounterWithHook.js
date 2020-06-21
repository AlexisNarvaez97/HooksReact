import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css';

export const CounterWithHook = () => {

    const { state, increment, reset, decrement } = useCounter( 1000 );


    return (
        <>

        <h1>Counter with Hook: { state }  </h1>
        <hr/>


        <button className="btn btn-primary m-1" onClick={ () => increment(5) }> + 1</button>
        <button className="btn btn-success" onClick={ reset }>Reset</button>
        <button className="btn btn-warning m-1" onClick={ () => decrement(20) }> - 1</button>
            
        </>
    )
}
