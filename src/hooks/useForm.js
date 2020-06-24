import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState(initialState)

    const reset = () => {
        setFormValues(initialState);
    }

    const hadleInputChange = ({ target }) => {
        // console.log(e.target.name);
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    return [formValues, hadleInputChange, reset];

}
