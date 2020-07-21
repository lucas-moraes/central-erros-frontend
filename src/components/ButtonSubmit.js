import React from 'react';
import styled from 'styled-components';



const ButtonSubmit = (props) => {

    const Button = styled.button`
    background: #004990;
    color: #fff;
    font-weight: 600;
    padding: 7px;
    margin: auto;
    border-radius: 4px;
    border-width: 0.2px;
    transition: 0.8s;
    border-style: none;

    &:hover{
        transition: 0.8s;
        background: ${props.color };
        color: #000;
        webkit-box-shadow: 2px 3px 5px 0px rgb(255,168,45);
        -moz-box-shadow: 2px 3px 5px 0px rgb(255,168,45);
        box-shadow: 2px 3px 5px 0px rgb(255,168,45);
    }

    &:focus{
        transition: 2s;
        background: #ffe512bd;
        color: #000;
        border-color: #d67836;
    }
`;

    return (
        <>
            <Button>{ props.title }</Button>
        </>
    );
};

export default ButtonSubmit;