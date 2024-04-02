import React, { useState } from 'react'

export const useForm = (initialFormState = {} ) => {

    const [formState, setFormState] = useState(initialFormState);

    const onInputChange = ({target}) =>{

        const {name, value} = target;
    
        setFormState({
            ...formState,
            [name]: value
        });
    };
  

    return{
        formState,
        onInputChange
    };
};
