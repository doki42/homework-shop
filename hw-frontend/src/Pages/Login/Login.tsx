import { useState } from "react";
import { useNavigate } from 'react-router';
import { LoginForm } from "../../Components/LoginForm";
import { ICredentials, IUser } from "../../Interfaces";
import { logIn } from "../../Requests";
import { Container } from "react-bootstrap";

interface LogInProps {
    onLogIn: (user: IUser) => void;
}

export function LogIn(props: LogInProps) {
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    async function logInAndRedirect(credentials: ICredentials) {
        setError(false);
        try {
            const user = await logIn(credentials);
            props.onLogIn(user);
            navigate('/product')
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return (
        <Container>
            <LoginForm error={error} type={"login"} onSubmit={logInAndRedirect} />
        </Container>
    )
}