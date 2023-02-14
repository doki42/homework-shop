import { useState } from 'react';
import { ICredentials } from '../../Interfaces';
import { Form, Container, Button } from 'react-bootstrap';

interface LoginFormProps {
    type: 'login';
    error: boolean;
    onSubmit: (credentials: ICredentials) => void;    
}

export function LoginForm(props: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setEmail('');
        setPassword('');

        props.onSubmit({ email, password});
    }

    return(
        <Container className='mb-4'>
            <h1 className="fw-normal mb-3 pb-3" >Please login</h1>
            {
                props.error && (
                    <div>Authentication failed</div>
                )
            }
            <Form onSubmit={onSubmit}>
                <div className='form-outline mb-4'>
                <Form.Control type={"email"} placeholder={"Email Address"} value={email} onChange={e => setEmail(e.target.value)} required/>
                </div>
                <div className='mb-3'>
                <Form.Control type={"password"} placeholder={"Password"} value={password} onChange={e => setPassword(e.target.value)} required/>
                </div>
                <div className='pt-1 mb-3'>
                <Button type={"submit"}>Login</Button>
                </div>
            </Form>
        </Container>
    )
}