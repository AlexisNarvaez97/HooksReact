import React, { useState } from 'react';
import { MultipleHooks } from '../03-examples/MultipleHooks';

import '../02-useEffect/effect.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleHooks/>}

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show );
                }}    
            >
                Show/Hide
            </button>
            
        </div>
    )
}
