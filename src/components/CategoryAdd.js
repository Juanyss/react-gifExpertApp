import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const [lastValue, setLastValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories((values) => [ inputValue,...values] );
            setLastValue(inputValue);
            setInputValue('');
        }
    }

    

    return (        
        <form onSubmit={handleSubmit} >
            
            <h1>Last value writed: {lastValue} </h1>
            <input type="text" 
            value={ inputValue } 
            onChange={ handleInputChange } />
        </form>    
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
