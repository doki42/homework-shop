import { Fragment } from "react";
import { IUser } from "../../Interfaces";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import { logOut } from '../../Requests';
import { Outlet } from "react-router";

interface NavbarProps {
    currentUser: IUser|null;
    onLogOut: () => void;
}

export function NavBar(props: NavbarProps) {

    async function logOutAndRedirect() {
        await logOut();
        props.onLogOut();
    }

    return (
        <Container>
        <Navbar bg={"primary"}>
            <Container>
                <Nav>
                    <NavLink href='/'>HOME</NavLink>
                    <NavLink href='/Statistics'>STATISZTIKA</NavLink>
                    <NavLink href='/Login'>LOGIN</NavLink>
                </Nav>
            </Container>
        </Navbar>
        <div>
            <Outlet/>
        </div>
        </Container>
    )
}