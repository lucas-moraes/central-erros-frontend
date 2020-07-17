import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';



const CardStyle = styled.div`
    background: #ffff;
    width: 300px;
    height: 300px;
    border-radius: 5%;
    box-shadow: 0 7px 10px 0 #de6e00;
    position: relative;
`;

const Titulo = styled.div`
    font-size: 20px;
    text-align: center;
    height: 60px;
`;

const Texto = styled.h4`
    margin: 0;
    padding: 17px;
`;

const Corpo = styled.div`
    height: 180px;
`;

const Rodape = styled.div`
    height: 60px;
`;

export function Card() {
    return (
        <CardStyle>
            <Titulo>
                <img src={logo} style={{ padding: "10px", width: "40px", position: "absolute", left: 0 }} alt="Logotipo" />
                <Texto>Login</Texto>
            </Titulo>
            <Corpo>
                corpo
            </Corpo>
            <Rodape>

            </Rodape>
        </CardStyle>
    )
}


