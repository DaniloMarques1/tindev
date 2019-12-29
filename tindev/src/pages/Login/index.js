import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../../assets/logo.png';
import api from '../../services/api';

import {
    Container,
    LogoImg,
    Input,
    Button,
    ButtonText
} from './styles';

export default function Login( { navigation } ) {
    const [dev, setDev] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Home', user);
            }
        });
    }, [])

    const handleLogin = async () => {
        try {
            const response = await api.post('/devs', {
                username: dev
            });
            console.log(response.data);
            const { _id} = response.data;
            await AsyncStorage.setItem('user', _id);
            navigation.navigate('Home', { user: _id }); 
        } catch(e) {

        }
    }

    return (
        <Container>
            <LogoImg source={Logo} />
            <Input
                value={dev}
                onChangeText={setDev}
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