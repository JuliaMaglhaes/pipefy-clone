import React from 'react';
import Pipefy from '../../assets/img/pipefy.png';
import { Container } from './styles'

export default function Header(){
    return(
        <Container>
            <img src={Pipefy} alt="Pipefy" />
        </Container>
    )
}