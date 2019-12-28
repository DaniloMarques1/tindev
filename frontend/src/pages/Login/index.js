import React ,{ useState } from 'react';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import {
    Container,
    Form,
    Button,
    Input,
} from './styles.js';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/devs', {
                username
            });
            const { _id } = response.data;

            history.push(`/dev/${_id}`);
        } catch(e) {
            //TODO: Tratar erro
        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <img src={Logo} alt="Logo do app"/> 
                <Input 
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Digite seu usuario do github'
                />
                <Button type='submit'>Entrar</Button>
            </Form>
        </Container>
    );
}