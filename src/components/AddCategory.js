import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    

    const [inputValue, setInputValue] = useState('');


    //obtenemos nuevo valor
    const handleInputChange = ( e ) => { 
        //setInputValue([...setInputValue,'Hola']);
        setInputValue(e.target.value);
        
    }

    //Actualizamos el nuevo valor agregandolo al componenente
    const handleSubmit = ( e ) => {
        e.preventDefault();
        //console.log('Submit Hecho');   
            if( inputValue.trim().length > 2) {
                setCategories(cats => [inputValue, ...cats]);   
            setInputValue(''); 
        }
    }


    return (
        

        <form onSubmit={ handleSubmit }>

            <input 
                type="text" 
                className="form-control"
                value={inputValue}
                onChange={ handleInputChange }
            />
            <p>{inputValue}</p>
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}