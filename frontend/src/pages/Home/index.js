import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import Like from '../../assets/like.svg';
import Dislike from '../../assets/dislike.svg';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import {
    Main,
    DivButtons,
   Button,
    AvatarImg,
    End
} from './styles';

export default function Home({ match }) {
    const [devs ,setDevs] = useState([]);

    useEffect(() => {
        const getDevs = async () => {
            try {
                const response = await api.get('/devs', {
                    headers: {
                        user: match.params.id
                    }
                });
                setDevs(response.data);
            } catch(e) {
                console.log(e);
            }
        }

        getDevs();
    }, [match.params.id]);

    const handleLike = async (id) => {
        try {
            await api.post(`/devs/${id}/likes`, null, {
                headers: {
                    user: match.params.id
                }
            });
            setDevs(devs.filter(dev => dev._id !== id));
        } catch(e) {
            console.log(e);
        }
    }

    const handleDislike = async (id) => {
        try {
            await api.post(`/devs/${id}/dislikes`, null, {
                headers: {
                    user: match.params.id
                }
            });
            setDevs(devs.filter(dev => dev._id !== id));
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Main>
            <Link to='/'>
                <img src={Logo} alt='Logo do tindev' />
            </Link>
            { devs.length > 0 ? (
                <ul>
                {devs.map( dev => (
                    <li key={dev._id}>
                            <AvatarImg src={dev.avatar} alt="avatar github"/>
                            <footer>
                                <strong>{dev.name}</strong>
                                <p>{dev.bio}</p>
                            </footer>
                            <DivButtons>
                                <Button type='button' onClick={(e) => handleLike(dev._id)}>
                                    <img src={Like} alt='Like' />
                                </Button>
                                <Button type='button' onClick={(e) => handleDislike(dev._id)}> 
                                        <img src={Dislike} alt='Dislike' />
                                </Button>
                            </DivButtons>
                        </li>
                    ) )}
                </ul>
            )  : ( <End>Acabou :(</End> )}
            
        </Main>
    )
}