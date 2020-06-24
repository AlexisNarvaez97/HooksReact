import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { useForm } from '../../hooks/useForm';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}


export const TodoApp = () => {



    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { description }, hadnleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const hadleDelete = ( todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    };

    const hadleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const hadleSubmit = (e) => {
        e.preventDefault();


        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);

        reset();
    }

    return (
        <div>
            <h1>TodoApp ( {todos.length } ) </h1>
            <hr/>


            <div className="row">
                <div className="col-7">
                <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, i) => (
                        <li key={todo.id} className="list-group-item">
                            <p onClick={ () => hadleToggle( todo.id )} className={ `${todo.done && 'complete'}` }>{ i + 1 }. { todo.desc }</p>
                            <button className="btn btn-danger" onClick={ () => hadleDelete(todo.id) }>Borrar</button>
                        </li>
                    ))
                }
            </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={ hadleSubmit }>
                        <input className="form-control" type="text" name="description" placeholder="Aprender..." autoComplete="off" value={ description } onChange={ hadnleInputChange } />
                        <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
                    </form>

                </div>
            </div>


        </div>
    )
}
