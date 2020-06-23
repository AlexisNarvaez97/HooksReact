import React, { useEffect, useState } from 'react'
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { email, name } = formState;

    const hadleInputChange = ({ target }) => {
        // console.log(e.target.name);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }


    useEffect( () => {
        // console.log('hey!');
    }, []);

    useEffect( () => {
        // console.log('FormState!');
    }, [formState]);

    useEffect( () => {
        // console.log('email cambio!');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <div className="form-group">
                <input type="text" placeholder="Tu nombre" name="name" className="form-control" autoComplete="off" value={ name } onChange={ hadleInputChange } />
            </div>
            <div className="form-group">
                <input type="text" placeholder="email@hotmail.com" name="email" className="form-control" autoComplete="off" value={ email } onChange={ hadleInputChange } />
            </div>

            { (name === '123') && <Message/> }

        </>
    )
}
