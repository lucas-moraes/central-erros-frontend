import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
border: solid;
border-radius: 5px;
border-color: #d6d6d6;
margin: auto;
border-width: 2px;
outline: none;
transition: 0.5s;
padding: 5px;

&:hover {
    border-color: #ff7906!important;
    border: solid;
    border-radius: 5px;
    border-width: 3px;
    margin: auto;
    outline: none;
    trasition: 0.5s;
}

&:focus {
    border-color: #ff7906!important;
    border: solid;
    border-radius: 5px;
    border-width: 3px;
    margin: auto;
    outline: none;
}
&::placeholder {
    color: #000;
}

`;

const InputText = () => {

    return (
        <>
            <TextInput placeholder="Email@email" />
        </>
    );
};

export default InputText;