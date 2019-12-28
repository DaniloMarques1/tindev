import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../../assets/logo.png';
import {
    Container,
    ImageLogo,
    Avatar,
    CardContainer,
    Card,
    Footer,
    DevName,
    DevBio,
    Button
} from './styles';

export default function Home( { navigation }) {
    const handleLogout = async  () => {
        console.log('Clicado')
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }
    return (
        <Container >
            <Button onPress={handleLogout}>
                <ImageLogo  source={Logo}/>
            </Button>
            <CardContainer>
                <Card>
                    <Avatar source={{uri: 'https://avatars1.githubusercontent.com/u/72895?v=4'}} />
                    <Footer>
                        <DevName>
                            Danilo Marques
                        </DevName>
                        <DevBio numberOfLines={3}>We will win self driving cars. We will win self driving cars. We will win self driving cars. We will win self driving cars. We will win self driving cars. </DevBio>
                    </Footer>
                </Card>
            </CardContainer>
        </Container>
    )
}