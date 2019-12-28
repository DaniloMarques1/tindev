import React from 'react';
import Logo from '../../assets/logo.png';
import {
    Container,
    ImageLogo,
    Avatar,
    CardContainer,
    Card,
    Footer,
    DevName,
    DevBio
} from './styles';

export default function Home() {
    return (
        <Container > 
            <ImageLogo  source={Logo}/>
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