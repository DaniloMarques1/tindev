import React from 'react';

import Logo from '../../assets/logo.png';

import {
    Container,
    LogoImg,
    Input,
    Button,
    ButtonText
} from './styles';

export default function Login( { navigation } ) {
    function handleLogin() {
        navigation.navigate('Home');
    }
    // const handleLogin = () => {
    //     navigation.navigate('Main');
    // }

    return (
        <Container>
            <LogoImg source={Logo} />
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Digite seu usuario do github'
                placeholderTextColor='#999'
            />
            <Button onPress={handleLogin}>
                <ButtonText>
                    Entrar
                </ButtonText>
            </Button>
        </Container>
    )
}