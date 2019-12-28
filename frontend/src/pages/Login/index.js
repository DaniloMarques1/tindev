import React from 'react';
import Logo from '../../assets/logo.svg';

import {
    Container,
    Form,
    Button,
    Input,
} from './styles.js';

export default function Login() {
    return (
        <Container>
            <Form>
                <img src={Logo} alt="Logo do app"/> 
                <Input 
                    type='text'
                    placeholder='Digite seu usuario do github'
                />
                <Button type='submit'>Entrar</Button>
            </Form>
        </Container>
    );
}