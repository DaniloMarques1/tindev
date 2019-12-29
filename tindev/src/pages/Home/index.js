import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../../assets/logo.png';
import Like from '../../assets/like.png';
import Dislike from '../../assets/dislike.png';
import api from '../../services/api';
import {
    Container,
    ImageLogo,
    Avatar,
    CardContainer,
    Card,
    Footer,
    DevName,
    DevBio,
    ButtonLogout,
    ContainerButtos,
    ImageButton,
    Button,
    End
} from './styles';

export default function Home( { navigation }) {
    const [devs, setDevs] = useState([]);

    const handleLogout = async  () => {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    useEffect(() => {
        const getDevs = async () => {
            try {
                const user = navigation.getParam('user');
                const response = await api.get('/devs', {
                    headers: {
                        user
                    }
                });
                setDevs(response.data);
            } catch(e) {
                console.log(e);
            }
        }

        getDevs();
    }, []);



    const handleLike = async () => {
        try {
            const user = navigation.getParam('user');
            const { _id } = devs[devs.length - 1];
            await api.post(`/devs/${_id}/likes`, null, {
                headers: {
                    user 
                }
            });
            setDevs(devs.filter(dev => dev._id !== _id));
        } catch(e) {

        }
    }

    const handleDislike = async () => {
        try {
            const user = navigation.getParam('user');
            const { _id } = devs[devs.length - 1];
            await api.post(`/devs/${_id}/dislikes`, null, {
                headers: {
                    user
                }
            });
            setDevs(devs.filter(dev => dev._id !== _id));
        } catch(e) {

        }
    }


    return (
        <Container >
            <ButtonLogout onPress={handleLogout}>
                <ImageLogo  source={Logo}/>
            </ButtonLogout>
            <CardContainer>
                { devs.length === 0  ? (
                    <End>Acabou :( </End>
                ) : (
                    
                    devs.map(dev => (
                        <Card key={dev._id}>
                           <Avatar source={{uri: dev.avatar}} />
                           <Footer>
                               <DevName>
                                    { dev.name }
                               </DevName>
                               <DevBio numberOfLines={3}>{dev.bio}</DevBio>
                           </Footer>
                       </Card>  
                    )) 
                )}
             
            </CardContainer>
            <ContainerButtos>
                        <Button onPress={handleDislike}>
                            <ImageButton  source={Dislike} />
                        </Button>
                        <Button onPress={handleLike}>
                            <ImageButton  source={Like} />
                        </Button>
                    </ContainerButtos>
        </Container>
    )
}